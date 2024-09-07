import {
  ButtonLink,
  SectionHeading,
  Strong,
  TextLink,
} from '@nx/nx-dev/ui-common';

export function Conformance(): JSX.Element {
  return (
    <article className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-5xl">
        <SectionHeading
          as="h2"
          variant="title"
          id="codeowners-on-steroids"
          className="scroll-mt-24"
        >
          Scale more confidently with workspace conformance
        </SectionHeading>
        <SectionHeading as="p" variant="subtitle" className="mt-6">
          Ensuring consistent code quality and long-term maintainability across
          large teams is critical. Nx Powerpack allows you to{' '}
          <Strong>
            define and run conformance rules throughout your workspace
          </Strong>
          , leveraging built-in rules or{' '}
          <Strong>
            creating your own to ensure compliance with organizational
            standards.
          </Strong>{' '}
          With Nx Cloud Enterprise Edition, you can{' '}
          <Strong>
            upload your custom rules to your Nx Cloud organization
          </Strong>{' '}
          and automatically enforce them across multiple repositories and
          workspaces, regardless of the tech stack.
        </SectionHeading>
        <div className="mt-10 flex gap-x-6">
          <ButtonLink
            href="/some-docs-page"
            title="Learn how to set up conformance rules"
            variant="primary"
            size="large"
          >
            Learn how to use conformance rules
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
