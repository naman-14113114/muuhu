import type { Metadata } from "next";
import { LogOut } from "lucide-react";
import { signOutAction } from "@/app/actions/auth";
import { PasswordForm } from "@/components/account/PasswordForm";
import { ProfileForm } from "@/components/account/ProfileForm";
import { Button } from "@/components/ui/Button";
import { requireAccount } from "@/lib/account";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Update your Muuhu account settings.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function AccountSettingsPage() {
  const account = await requireAccount("/account-settings");

  return (
    <section className="Muuhu-section bg-[var(--cream)] py-16 md:py-24">
      <div className="Muuhu-wrap">
        <div className="mb-10">
          <p className="Muuhu-eyebrow">Settings</p>
          <h1 className="Muuhu-heading mt-3">Account care.</h1>
          <p className="Muuhu-copy mt-4 max-w-2xl">
            Update your profile, shipping details, password, and sign-in state.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <h2 className="Muuhu-display text-3xl text-[var(--plum)]">
                Profile and shipping
              </h2>
              <div className="mt-6">
                <ProfileForm email={account.user.email} profile={account.profile} />
              </div>
            </section>

            <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
              <h2 className="Muuhu-display text-3xl text-[var(--plum)]">
                Password
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Use at least 8 characters for your new password.
              </p>
              <div className="mt-6">
                <PasswordForm />
              </div>
            </section>
          </div>

          <aside className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 lg:sticky lg:top-24 lg:self-start">
            <p className="Muuhu-mono text-[var(--gold)]">Session</p>
            <h2 className="Muuhu-display mt-3 text-3xl text-[var(--plum)]">
              Signed in as
            </h2>
            <p className="mt-2 break-words text-sm font-semibold text-[var(--muted)]">
              {account.user.email}
            </p>
            <form action={signOutAction} className="mt-6">
              <Button className="w-full" variant="ghost" type="submit">
                <LogOut size={17} />
                Sign out
              </Button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

