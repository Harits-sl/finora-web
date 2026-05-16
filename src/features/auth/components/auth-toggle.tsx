'use client';

import { useState } from 'react';

type AuthMode = 'sign-in' | 'create-account';

export function AuthToggle() {
  const [mode, setMode] = useState<AuthMode>('sign-in');

  return (
    <div className="flex items-center justify-around bg-muted rounded-lg p-1">
      <button
        onClick={() => setMode('sign-in')}
        className={`flex-1 px-4 py-1.5 rounded-md text-sm font-semibold transition-colors cursor-pointer  ${
          mode === 'sign-in' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Sign in
      </button>
      <button
        onClick={() => setMode('create-account')}
        className={`flex-1 px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          mode === 'create-account'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Create account
      </button>
    </div>
  );
}
