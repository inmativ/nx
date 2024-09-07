'use client';

import { ButtonLink, SectionHeading, Strong } from '@nx/nx-dev/ui-common';

export function CustomCacheStorage(): JSX.Element {
  return (
    <article className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-5xl">
        <SectionHeading
          as="h2"
          variant="title"
          id="custom-cache-storage"
          className="scroll-mt-24"
        >
          Custom Remote Cache Storage
        </SectionHeading>
        <SectionHeading as="p" variant="subtitle" className="mt-6">
          Enjoy the{' '}
          <Strong>flexibility of managing your remote cache location</Strong> on
          S3 or custom network drives. With Nx Powerpack's custom remote caching
          feature, you can configure Nx to write cache data directly to your own
          AWS S3 buckets or network drives, whether your infrastructure is
          already in place or you need more control over your caching location.
        </SectionHeading>
        <div className="mt-10 flex gap-x-6">
          <ButtonLink
            href="/powerpack?utm_source=powerpack&utm_medium=website&utm_campaign=powerpack_links&utm_content=cta_custom_cache_storage"
            title="Learn more about Nx Powerpack"
            variant="primary"
            size="large"
          >
            Learn more about Custom Cache Storage
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
