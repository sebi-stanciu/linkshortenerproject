import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-bold tracking-tight">LinkShortener</h1>
      <p className="max-w-sm text-center text-muted-foreground">
        Shorten, share, and track your links with ease.
      </p>
      <div className="flex gap-3">
        <SignInButton mode="modal">
          <Button variant="outline">Sign in</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button>Get started</Button>
        </SignUpButton>
      </div>
    </div>
  );
}
