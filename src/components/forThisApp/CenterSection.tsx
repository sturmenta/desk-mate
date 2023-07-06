import { UserDataInterface } from "@/hooks";

import { CalendarMonthPreview } from "../generic";
import { MarkdownSection } from "./MarkdownSection";

export const CenterSection = ({
  userData,
}: {
  userData?: UserDataInterface;
}) => {
  return (
    <div className="flex flex-1 border-r border-l border-neutral-800 flex-col">
      <div className="p-2 text-sm">🎯 goal: $10k usd / month</div>
      <Line />
      <div className="flex flex-1 items-center justify-center p-3 px-5 text-5xl pb-6">
        remember what are you doing, where you are now and how close you are to
        achieve your goal - keep going
      </div>
      <div className="flex flex-row">
        <MarkdownSection
          title="🗓️ This week"
          mdText={userData?.week__md_text}
        />
        <CalendarMonthPreview />
      </div>
    </div>
  );
};

const Line = () => <div className="border-b border-neutral-800" />;
