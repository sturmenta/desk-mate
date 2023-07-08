import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Font_Mulish200, Font_Mulish500 } from "@/fonts";

import { CalendarMonthPreview } from "../generic";
import { MarkdownSection } from "./MarkdownSection";

export const CenterSection = ({
  goal,
  customQuote,
  dailyQuote,
  week__md_text,
}: {
  goal?: string | null | undefined;
  customQuote?: string | null | undefined;
  dailyQuote?: string | null | undefined;
  week__md_text?: string | null | undefined;
}) => {
  return (
    <div className="flex flex-1 border-r border-l border-neutral-800 flex-col">
      <div className="p-2 text-sm">🎯 Goal: {goal}</div>
      <Line />
      <div className="flex flex-1 flex-col p-8 pt-2 pb-6 items-center justify-center">
        <div
          className="text-3xl text-center leading-10 tracking-wide"
          style={{ fontFamily: Font_Mulish200.style.fontFamily }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, ...props }) => <p {...props} />,
              strong: ({ node, ...props }) => (
                <p
                  style={{ fontFamily: Font_Mulish500.style.fontFamily }}
                  {...props}
                />
              ),
            }}
          >
            {customQuote || dailyQuote || ""}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex flex-row">
        <MarkdownSection title="🗓️ This week" mdText={week__md_text} />
        <CalendarMonthPreview />
      </div>
    </div>
  );
};

const Line = () => <div className="border-b border-neutral-800" />;
