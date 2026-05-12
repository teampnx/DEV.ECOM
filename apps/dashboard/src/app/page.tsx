import { DashboardApp } from '@/components/DashboardApp';

export default function Page() {
  const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return <DashboardApp clerkEnabled={clerkEnabled} />;
}
