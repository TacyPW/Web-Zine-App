
import { clsx } from 'clsx';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

interface Step {
  label: string;
  href: string;
  active?: boolean;
}

export default function Steps({
  steps,
}: {
  steps: Step[];
}) {
  return (
    <nav aria-label="Step" className="mb-6 block">
      <ol className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>
        {steps.map((step, index) => (
          <li
            key={step.href}
            aria-current={step.active}
            className={clsx(
              step.active ? 'text-gray-900' : 'text-gray-500',
            )}
          >
            <Link href={step.href}>{step.label}</Link>
            {index < steps.length - 1 ? (
              <span className="mx-3 inline-block">→</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}



export function ZineSteps({ activeStep }: { activeStep: number }) {


  return (
  <div id="creation_steps" className="mt-4 flex items-center justify-between gap-2 md:mt-8">
    <Steps
      steps={[
        { label: 'Choose a Site', href: '/dashboard/create?1', active: activeStep/1 === 1 },
        { label: 'Extract Content', href: `/dashboard/create?2`, active: activeStep/2 === 1 },
        { label: 'Preview Layout', href: `/dashboard/create?3`, active: activeStep/3 === 1 },
        { label: 'Export', href: `/dashboard/create?4`, active: activeStep/4 === 1 },
      ]}
    />
  </div>
  );
}