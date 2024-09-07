'use client';
import { SectionHeading } from '@nx/nx-dev/ui-common';
import { PowerpackPricing } from './powerpack-pricing';

export function Hero(): JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <SectionHeading
              as="h1"
              variant="display"
              className="text-4xl sm:text-5xl md:text-6xl"
            >
              Nx Powerpack
            </SectionHeading>
          </div>
          <SectionHeading as="h2" variant="subtitle" className="mb-8">
            Enterprise-grade features for your Nx workspace
          </SectionHeading>
          <SectionHeading
            as="p"
            variant="subtitle"
            className="mx-auto mt-6 max-w-4xl"
          >
            Nx Powerpack is a suite of paid extensions for Nx specifically
            designed for enterprises. Built and supported by the Nx core team,
            Powerpack provides flexibility of choice with custom cache locations
            and features designed to enhance maintainability and scale
            development, ensuring your teams can operate efficiently at scale.
          </SectionHeading>
        </div>
        <div className="lg:col-span-1">
          <PowerpackPricing />
        </div>
      </div>
    </section>
  );
}
