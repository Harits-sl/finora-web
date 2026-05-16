import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export function LoginForm() {
  return (
    <div className="flex flex-col">
      <FieldGroup>
        <Field>
          <FieldLabel
            htmlFor="fieldgroup-email"
            className="md:text-base"
          >
            Email address
          </FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="you@example.com"
            className="md:text-base md:py-5 bg-muted transition-all duration-100 focus:bg-background"
          />
        </Field>
        <Field>
          <FieldLabel
            htmlFor="fieldgroup-password"
            className="md:text-base"
          >
            Password
          </FieldLabel>
          <Input
            id="fieldgroup-password"
            type="password"
            placeholder="••••••••"
            className="md:text-base md:py-5 bg-muted transition-all duration-100 focus:bg-background"
          />
        </Field>
        <Field>
          <Button
            type="submit"
            className="cursor-pointer"
          >
            Sign in to Finora
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
