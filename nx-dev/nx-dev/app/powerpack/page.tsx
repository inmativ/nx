import { DefaultLayout } from '@nx/nx-dev/ui-common';
import {
  CallToAction,
  GetStarted,
  Hero,
  PowerpackFeatures,
} from '@nx/nx-dev/ui-powerpack';

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
        <PowerpackFeatures />
      </div>

      <div className="mt-32 scroll-mt-32 lg:mt-56">
        <GetStarted />
      </div>

      <div className="mt-32 lg:mt-56">
        <CallToAction />
      </div>
    </DefaultLayout>
  );
}
