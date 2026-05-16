import { Button } from '@/components/ui/button';

export function HeaderForm() {
  return (
    <div className="flex flex-col">
      <div className="text-xl md:text-2xl font-bold">Welcome back,</div>
      <div className="text-sm md:text-base text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Button
          size="sm"
          variant="link"
          className="hover:underline cursor-pointer px-0 font-semibold"
        >
          Sign up free →
        </Button>
      </div>
    </div>
  );
}
