import React, { ReactNode } from 'react';
import { ButtonLink } from '@nx/nx-dev/ui-common';
import { TerminalOutput } from '@nx/nx-dev/ui-fence';

// Define types for the ProcessStep props
interface ProcessStepProps {
  title: string;
  children?: ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, children }) => (
  <div className="relative z-10 flex h-full flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 dark:ring-slate-800/60">
    <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">
      {title}
    </h3>
    {children}
  </div>
);

const ConnectingLine = () => (
  <div className="absolute left-full top-1/2 -z-10 hidden h-px w-12 bg-slate-300 md:block dark:bg-slate-600">
    <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 transform rounded-full border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800"></div>
    <div className="absolute left-0 top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800"></div>
  </div>
);

export function PowerPackProcess() {
  return (
    <section
      id="power-pack-process"
      className="relative isolate px-6 py-32 sm:py-40 lg:px-8"
    >
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-black/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-white/10"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="power-pack-process-pattern"
            width={200}
            height={200}
            x="50%"
            y={0}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg
          x="50%"
          y={0}
          className="overflow-visible fill-slate-200/20 dark:fill-slate-800/20"
        >
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#power-pack-process-pattern)"
        />
      </svg>
      <div
        className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2
            id="cta"
            className="text-3xl font-medium tracking-tight text-slate-950 sm:text-5xl dark:text-white"
          >
            Ready? Get started!
          </h2>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="relative">
              <ProcessStep title="Get your License">
                <ButtonLink
                  href="/get-powerpack"
                  variant="primary"
                  size="large"
                  title="Get Powerpack"
                  className="px-6 py-3 text-lg"
                >
                  Buy now
                </ButtonLink>
              </ProcessStep>
              <ConnectingLine />
            </div>
            <div className="relative">
              <ProcessStep title="Activate Powerpack">
                <div className="mt-4 w-full">
                  <TerminalOutput command="nx activate-powerpack" />
                </div>
              </ProcessStep>
              <ConnectingLine />
            </div>
            <ProcessStep title="Enjoy unique enterprise features"></ProcessStep>
          </div>
        </div>
      </div>
    </section>
  );
}
