import {
  CustomCacheStorage,
  CodeOwners,
  Conformance,
  Hero,
  PowerPackProcess,
} from '@nx/nx-dev/ui-powerpack';

import { CallToAction, DefaultLayout } from '@nx/nx-dev/ui-common';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nx PowerPack',
  description:
    'Nx PowerPack is a suite of advanced tools designed for enterprise use cases.',
  openGraph: {
    url: 'https://nx.dev/powerpack',
    title: 'Nx PowerPack',
    description:
      'Nx PowerPack is a suite of advanced tools designed for enterprise use cases.',
    images: [
      {
        url: 'https://nx.dev/socials/nx-powerpack-media.png',
        width: 800,
        height: 421,
        alt: 'Nx PowerPack: Advanced tools for enterprises',
        type: 'image/jpeg',
      },
    ],
    siteName: 'NxDev',
    type: 'website',
  },
};

export default function NxPowerPackPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Hero />

      <div className="mt-32 scroll-mt-32 lg:mt-56" id="features">
        <CustomCacheStorage />
      </div>
      <div className="mt-32 lg:mt-56">
        <CodeOwners />
      </div>
      <div className="mt-32 lg:mt-56">
        <Conformance />
      </div>

      <div className="mt-32 lg:mt-56">
        <PowerPackProcess />
        {/* <CallToAction
          mainActionTitle="Get started with Nx PowerPack"
          mainActionLink="/docs/powerpack/getting-started"
        /> */}
      </div>
    </DefaultLayout>
  );
}
