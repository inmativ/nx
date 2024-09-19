import {
  addDependenciesToPackageJson,
  ensurePackage,
  formatFiles,
  generateFiles,
  GeneratorCallback,
  readJson,
  runTasksInSerial,
  Tree,
} from '@nx/devkit';
import { checkAndCleanWithSemver } from '@nx/devkit/src/utils/semver';
import { readModulePackageJson } from 'nx/src/utils/package-json';
import { join } from 'path';
import { satisfies, valid } from 'semver';
import { generatePrettierSetup } from '../../utils/prettier';
import { getRootTsConfigFileName } from '../../utils/typescript/ts-config';
import {
  nxVersion,
  prettierVersion,
  supportedTypescriptVersions,
  swcCoreVersion,
  swcHelpersVersion,
  swcNodeVersion,
  typescriptVersion,
} from '../../utils/versions';
import { InitSchema } from './schema';

async function getInstalledTypescriptVersion(
  tree: Tree
): Promise<string | null> {
  const rootPackageJson = readJson(tree, 'package.json');
  const tsVersionInRootPackageJson =
    rootPackageJson.devDependencies?.['typescript'] ??
    rootPackageJson.dependencies?.['typescript'];

  if (!tsVersionInRootPackageJson) {
    return null;
  }
  if (valid(tsVersionInRootPackageJson)) {
    // it's a pinned version, return it
    return tsVersionInRootPackageJson;
  }

  // it's a version range, check whether the installed version matches it
  try {
    const tsPackageJson = readModulePackageJson('typescript').packageJson;
    const installedTsVersion =
      tsPackageJson.devDependencies?.['typescript'] ??
      tsPackageJson.dependencies?.['typescript'];
    // the installed version matches the package.json version range
    if (
      installedTsVersion &&
      satisfies(installedTsVersion, tsVersionInRootPackageJson)
    ) {
      return installedTsVersion;
    }
  } finally {
    return checkAndCleanWithSemver('typescript', tsVersionInRootPackageJson);
  }
}

export async function initGenerator(
  tree: Tree,
  schema: InitSchema
): Promise<GeneratorCallback> {
  return initGeneratorInternal(tree, {
    addTsConfigBase: true,
    setUpPrettier: true,
    ...schema,
  });
}

export async function initGeneratorInternal(
  tree: Tree,
  schema: InitSchema
): Promise<GeneratorCallback> {
  const tasks: GeneratorCallback[] = [];
  // add tsconfig.base.json
  if (schema.addTsConfigBase && !getRootTsConfigFileName(tree)) {
    generateFiles(tree, join(__dirname, './files'), '.', {
      fileName: schema.tsConfigName ?? 'tsconfig.base.json',
    });
  }
  const devDependencies = {
    '@nx/js': nxVersion,
    // When loading .ts config files (e.g. webpack.config.ts, jest.config.ts, etc.)
    // we prefer to use SWC, and fallback to ts-node for workspaces that don't use SWC.
    '@swc-node/register': swcNodeVersion,
    '@swc/core': swcCoreVersion,
    '@swc/helpers': swcHelpersVersion,
  };

  if (!schema.js && !schema.keepExistingVersions) {
    const installedTsVersion = await getInstalledTypescriptVersion(tree);

    if (
      !installedTsVersion ||
      !satisfies(installedTsVersion, supportedTypescriptVersions, {
        includePrerelease: true,
      })
    ) {
      devDependencies['typescript'] = typescriptVersion;
    }
  }

  if (schema.setUpPrettier) {
    const prettierTask = generatePrettierSetup(tree, {
      skipPackageJson: schema.skipPackageJson,
    });
    tasks.push(prettierTask);
  }

  const installTask = !schema.skipPackageJson
    ? addDependenciesToPackageJson(
        tree,
        {},
        devDependencies,
        undefined,
        schema.keepExistingVersions
      )
    : () => {};
  tasks.push(installTask);

  if (!schema.skipFormat && schema.setUpPrettier) {
    ensurePackage('prettier', prettierVersion);
    await formatFiles(tree);
  }

  return runTasksInSerial(...tasks);
}

export default initGenerator;
