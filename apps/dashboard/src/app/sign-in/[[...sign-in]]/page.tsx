import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-bg px-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,255,79,0.2),transparent_65%)] blur-3xl" />
      <SignIn
        appearance={{
          elements: {
            card: 'border border-white/[0.08] bg-[#0c0c0c] shadow-card',
            headerTitle: 'text-white',
            headerSubtitle: 'text-muted',
            socialButtonsBlockButton: 'border-white/[0.08]',
            formButtonPrimary: 'bg-accent text-black hover:bg-accent/90',
          },
        }}
      />
    </div>
  );
}
