'use client';

import {
  ButtonLink,
  SectionHeading,
  Strong,
  TextLink,
} from '@nx/nx-dev/ui-common';

export function CodeOwners(): JSX.Element {
  return (
    <article className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-5xl">
        <SectionHeading
          as="h2"
          variant="title"
          id="codeowners-on-steroids"
          className="scroll-mt-24"
        >
          CodeOwners for monorepos
        </SectionHeading>
        <SectionHeading as="p" variant="subtitle" className="mt-6">
          Define and manage ownership where it matters—
          <Strong>at the project level</Strong>. Common VCS providers require
          folder-based ownership definitions, though. Nx Powerpack CodeOwners
          bridges this gap by{' '}
          <Strong>
            automatically tracking changes and syncing ownership data
          </Strong>{' '}
          with GitHub, GitLab, or Bitbucket-specific CODEOWNERS files. This
          ensures clear responsibilities and enables efficient collaboration
          across large-scale projects.
        </SectionHeading>
        <div className="mt-10 flex gap-x-6">
          <ButtonLink
            href="/some-docs-page"
            title="Learn more about CodeOwners"
            variant="primary"
            size="large"
          >
            Learn more about CodeOwners
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
