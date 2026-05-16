import Image from 'next/image';

export function Logo({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-primary/10 flex items-center justify-center rounded-md border border-primary/20">
          <Image
            src="/logo.png"
            alt="Logo"
            width={20}
            height={20}
          />
        </div>
        <span className="text-lg text-foreground font-bold">Finora</span>
      </div>
    </div>
  );
}
