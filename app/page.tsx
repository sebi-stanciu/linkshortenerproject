import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-12 px-4 py-12">
      <section className="space-y-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          LinkShortener
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Create short links your team can trust and track
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Turn long URLs into clean links, organize everything in one dashboard,
          and monitor performance from click to conversion.
        </p>
        <div className="flex justify-center gap-3">
          <SignInButton mode="modal">
            <Button variant="outline">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Get started</Button>
          </SignUpButton>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="space-y-6">
        <h2 id="features-heading" className="text-2xl font-semibold tracking-tight">
          Why teams choose LinkShortener
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-lg border border-border bg-background p-5">
            <h3 className="font-medium">Fast link creation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Generate short URLs in seconds and keep your most-used links easy
              to access.
            </p>
          </li>
          <li className="rounded-lg border border-border bg-background p-5">
            <h3 className="font-medium">Simple sharing</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Share memorable URLs across campaigns, docs, and social channels
              without clutter.
            </p>
          </li>
          <li className="rounded-lg border border-border bg-background p-5">
            <h3 className="font-medium">Clear analytics</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Understand how your links perform with actionable tracking in your
              dashboard.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
