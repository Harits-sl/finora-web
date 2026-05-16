import { Logo } from '@/shared/components/logo';
import { AuthToggle } from '../components/auth-toggle';
import { TitleAuth } from '../components/title-auth';
import { LoginForm } from '../components/login-form';
import { HeaderForm } from '../components/header-form';
import { AuthBrandPanel } from '../components/auth-brand-panel';
import { CTAHome } from '../components/cta-home';
import { PageContainer } from '@/shared/components/page-container';

export function LoginView() {
  return (
    <>
      {/* ── Mobile layout (default) ── */}
      <div className="flex flex-col md:hidden">
        <PageContainer>
          <Logo className="flex flex-col items-center mb-3.5" />
          <TitleAuth />
          <div className="mt-3">
            <CTAHome />
          </div>
          <div className="mt-4.5">
            <AuthToggle />
          </div>
          <div className="mt-5.5">
            <HeaderForm />
          </div>
          <div className="mt-5.5">
            <LoginForm />
          </div>
        </PageContainer>
      </div>

      {/* ── Desktop layout (md+) ── */}
      <div className="hidden md:grid md:grid-cols-2 min-h-screen">
        <AuthBrandPanel />

        <div className="flex flex-col">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              <CTAHome />
              <div className="mt-4.5">
                <AuthToggle />
              </div>
              <div className="mt-5.5">
                <HeaderForm />
              </div>
              <div className="mt-5.5">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
