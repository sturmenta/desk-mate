"use client";

import { CalendarSection, FullLoading, MarkdownSection } from "@/components";
import { useAuthRedirect, useUserData } from "@/hooks";

import LogoutButton from "./logout-button";

export default function Index() {
  const { authLoading } = useAuthRedirect();
  const { user, userData } = useUserData({ authLoading });

  if (authLoading || !user) return <FullLoading />;

  return (
    <div className="flex-1">
      <div className="flex py-3 pr-10 bg-neutral-900 border-b border-neutral-800">
        <span className="ml-auto">
          <span className="flex gap-4">
            {user.email} <span className="border-r"></span> <LogoutButton />
          </span>
        </span>
      </div>
      {/* ───────────────────────────────────────────────────── */}
      <div className="flex h-screen w-screen bg-neutral-900">
        <div className="flex flex-1 flex-col">
          <MarkdownSection title="daily:" mdText={userData?.daily__md_text} />
          <div className="flex flex-1 flex-col">
            <MarkdownSection title="weekly:" mdText={userData?.week__md_text} />
            <MarkdownSection
              title="not forget:"
              mdText={userData?.not_forget__md_text}
            />
          </div>
        </div>
        <CalendarSection text={userData?.calendar_text} />
      </div>
    </div>
  );
}
