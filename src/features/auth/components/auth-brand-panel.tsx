import { Logo } from '@/shared/components/logo';
import { PageContainer } from '@/shared/components/page-container';

const features = [
  {
    title: 'Real-time dashboard',
    description: 'Complete financial overview with live charts and analytics',
  },
  {
    title: 'Smart budget planner',
    description: 'Set limits, track spending, and get alerted before overspending',
  },
  {
    title: 'Savings goal tracker',
    description: 'Define goals with deadlines and watch your progress in real time',
  },
];

export function AuthBrandPanel() {
  return (
    <div className="bg-white px-10 py-8">
      <PageContainer className="h-full">
        <div className="hidden md:flex flex-col h-full">
          <Logo />

          <div className="flex-1 flex flex-col justify-center max-w-sm">
            <h1 className="text-4xl font-bold leading-tight text-foreground">
              Your money, <span className="block italic text-primary">finally clear.</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Finora gives you a complete view of your finances — expenses, budgets, savings goals, and analytics — in
              one beautiful dashboard.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              &ldquo;Finora turned my chaotic finances into something I&apos;m actually proud of. Went from saving
              nothing to 35% of my income.&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  MR
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Marcus Rivera</p>
                  <p className="text-xs text-muted-foreground">Freelance Developer, NYC</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
