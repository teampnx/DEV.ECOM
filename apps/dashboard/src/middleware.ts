import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/api/webhooks/stripe',
  '/api/health',
]);

export default clerkMiddleware((auth, req) => {
  if (!process.env.CLERK_SECRET_KEY) {
    return NextResponse.next();
  }
  if (!isPublicRoute(req) && process.env.CLERK_SECRET_KEY) {
  auth().protect();
}
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
