'use client';
import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { ButtonLink } from '@nx/nx-dev/ui-common';
import Link from 'next/link';

export function PowerpackPricing() {
  const [isYearly, setIsYearly] = useState(false);
  const monthlyPrice = 26;
  const yearlyPrice = 250; // 10 months for the price of 12

  return (
    <article className="relative rounded-b-xl bg-white px-4 py-6 ring-1 ring-blue-500 xl:px-6 xl:py-8 dark:bg-slate-950 dark:ring-sky-500">
      <h4 className="absolute -top-9 left-0 w-full rounded-tl-lg rounded-tr-lg bg-blue-500 p-2 text-center text-sm font-medium text-white shadow-inner ring-1 ring-blue-500 dark:bg-sky-500 dark:ring-sky-500">
        Get Nx Powerpack
      </h4>

      <div className="mb-6 text-center">
        <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          ${isYearly ? yearlyPrice : monthlyPrice}
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {isYearly ? 'per year' : 'per month'} / seat
        </p>
      </div>

      <div className="mb-6 flex items-center justify-center">
        <span className={`mr-2 ${!isYearly ? 'font-bold' : ''}`}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-slate-700"
        >
          <span
            className={`${
              isYearly ? 'translate-x-5' : 'translate-x-0'
            } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
          />
        </button>
        <span className={`ml-2 ${isYearly ? 'font-bold' : ''}`}>Yearly</span>
      </div>

      <ButtonLink
        href="https://nx.app/nx-powerpack/purchase?utm_source=nx.dev&utm_medium=referral&utm_campaign=nx-powerpackurl"
        title="Buy your license"
        size="default"
        className="mb-4 w-full"
      >
        Buy your license
      </ButtonLink>

      <div className="text-center">
        <Link
          href="/contact"
          title="Contact us"
          prefetch={false}
          className="group text-sm font-medium leading-6 text-slate-950 dark:text-white"
        >
          Questions? Reach out to us
          <span
            aria-hidden="true"
            className="inline-block transition group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
