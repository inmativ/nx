'use client';
import { forwardRef, ReactElement, ReactNode, useRef } from 'react';
import { ButtonLink, SectionHeading, Strong } from '@nx/nx-dev/ui-common';
import { cx } from '@nx/nx-dev/ui-primitives';
import { AnimatedBeam } from '@nx/nx-dev/ui-animations';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { AmazonS3Icon, GitHubIcon, GitlabIcon } from '@nx/nx-dev/ui-icons';

export function PowerpackFeatures(): ReactElement {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="col-span-full flex max-w-full flex-col gap-16 bg-white/50 px-6 py-16 ring-1 ring-slate-200 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-full lg:flex-row lg:items-center lg:py-16 xl:px-16 dark:bg-white/5 dark:ring-white/10">
            <div className="max-w-full">
              <SectionHeading
                as="h2"
                variant="title"
                id="custom-remote-cache-storage"
                className="scroll-mt-48"
              >
                Custom remote cache storage
              </SectionHeading>
              <p className="mt-6 text-pretty text-lg">
                Enjoy the{' '}
                <Strong>
                  flexibility of managing your remote cache location
                </Strong>{' '}
                on S3 or custom network drives. With Nx Powerpack's custom
                remote caching feature, you can configure Nx to write cache data
                directly to your own AWS S3 buckets or network drives, whether
                your infrastructure is already in place or you need more control
                over your caching location.
              </p>
              <div className="mt-16">
                <ButtonLink
                  href="/some-docs-page"
                  title="Learn more about Custom Cache Storage"
                  variant="secondary"
                  size="default"
                >
                  Learn more about Custom Cache Storage
                </ButtonLink>
              </div>
            </div>
            <div className="mt-8 w-full lg:mt-0">
              <CustomRemoteCacheAnimation />
            </div>
          </div>

          {/* Adjust the other two items */}
          <div className="flex flex-col gap-16 bg-white/50 px-6 py-16 ring-1 ring-slate-200 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:justify-between lg:py-16 xl:px-16 dark:bg-white/5 dark:ring-white/10">
            <div className="max-w-2xl">
              <SectionHeading
                as="h2"
                variant="title"
                id="codeowners-for-monorepos"
                className="scroll-mt-48"
              >
                CODEOWNERS for monorepos
              </SectionHeading>
              <p className="mt-6 text-pretty text-lg">
                Common VCS providers require folder-based ownership definitions.
                Now, define and manage ownership where it matters—
                <Strong>at the project level</Strong>
              </p>
              <p className="mt-6 text-pretty text-lg">
                Nx Powerpack CODEOWNERS bridges this gap by{' '}
                <Strong>
                  automatically tracking changes and syncing ownership data
                </Strong>{' '}
                with GitHub, GitLab, or Bitbucket-specific CODEOWNERS files.
                This ensures clear responsibilities and enables efficient
                collaboration across large-scale projects.
              </p>
            </div>
            <div className="flex">
              <ButtonLink
                href="/some-docs-page"
                title="Learn more about CodeOwners"
                variant="secondary"
                size="default"
              >
                Learn more about CodeOwners
              </ButtonLink>
            </div>
          </div>
          <div className="flex flex-col gap-16 bg-white/50 px-6 py-16 ring-1 ring-slate-200 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:justify-between lg:py-16 xl:px-16 dark:bg-white/5 dark:ring-white/10">
            <div className="max-w-2xl">
              <SectionHeading
                as="h2"
                variant="title"
                id="workspace-conformance"
                className="scroll-mt-48"
              >
                Workspace conformance
              </SectionHeading>
              <p className="mt-6 text-pretty text-lg">
                Ensuring consistent code quality and long-term maintainability
                across large teams is critical. Nx Powerpack allows you to{' '}
                <Strong>
                  define and run conformance rules throughout your workspace
                </Strong>
                , leveraging built-in rules or{' '}
                <Strong>
                  create your own to ensure compliance with organizational
                  standards.
                </Strong>
              </p>
              <p className="mt-6 text-pretty text-lg">
                With Nx Cloud Enterprise Edition, you can{' '}
                <Strong>
                  upload your custom rules to your Nx Cloud organization
                </Strong>{' '}
                and automatically enforce them across multiple repositories and
                workspaces, regardless of your tech stack.
              </p>
            </div>
            <div className="flex">
              <ButtonLink
                href="/some-docs-page"
                title="Learn how to set up conformance rules"
                variant="secondary"
                size="default"
              >
                Learn how to use conformance rules
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </section>
  );
}

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(
        'border-1 z-10 flex size-12 items-center justify-center rounded-full border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-slate-950',
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

export function CustomRemoteCacheAnimation(): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const gitHubRef = useRef<HTMLDivElement>(null);
  const computer3Ref = useRef<HTMLDivElement>(null);
  const computer1Ref = useRef<HTMLDivElement>(null);
  const amazonBucketRef = useRef<HTMLDivElement>(null);
  const computer2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[150px] w-full justify-between gap-8"
      ref={containerRef}
    >
      <div className="flex w-full items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-12">
          <Circle ref={computer1Ref}>
            <GitlabIcon
              aria-hidden="true"
              className="size-6 text-slate-900 dark:text-white"
            />
          </Circle>
          <Circle ref={computer2Ref}>
            <ComputerDesktopIcon
              aria-hidden="true"
              className="size-6 text-slate-900 dark:text-white"
            />
          </Circle>
        </div>
        <div className="flex w-full justify-center">
          <Circle ref={amazonBucketRef} className="size-16">
            <AmazonS3Icon
              aria-hidden="true"
              className="size-8 text-slate-900 dark:text-white"
            />
          </Circle>
        </div>
        <div className="flex flex-col items-center gap-12">
          <Circle ref={computer3Ref}>
            <ComputerDesktopIcon
              aria-hidden="true"
              className="size-6 text-slate-900 dark:text-white"
            />
          </Circle>
          <Circle ref={gitHubRef}>
            <GitHubIcon
              aria-hidden="true"
              className="size-6 text-slate-900 dark:text-white"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={computer1Ref}
        toRef={amazonBucketRef}
        curvature={35}
        endYOffset={0}
        bidirectional={true}
        duration={14}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={computer2Ref}
        toRef={amazonBucketRef}
        curvature={-35}
        endYOffset={20}
        bidirectional={true}
        duration={14}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={computer3Ref}
        toRef={amazonBucketRef}
        curvature={35}
        endYOffset={0}
        bidirectional={true}
        duration={14}
        delay={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gitHubRef}
        toRef={amazonBucketRef}
        curvature={-35}
        endYOffset={20}
        bidirectional={true}
        duration={14}
        delay={2}
      />
    </div>
  );
}
