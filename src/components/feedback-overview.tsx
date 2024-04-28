import { Feedback } from "@/app/bedrift/dashboard/data";
import { FeedbackPreview } from "./feedback-preview";

export function FeedbackOverview({ data }: { data: Array<Feedback> }) {
  return (
    <div className={`grid grid-cols-1 gap-4 w-full`}>
      {data.map((d) => {
        return (
          <div
            key={d.eventDate.toISOString()}
            className="p-4 flex flex-col gap-4 justify-between rounded-2xl bg-offwhite border border-gray-500"
          >
            <div>
              <h3 className="text-2xl text-balance font-serif font-medium">
                {data[0].eventTitle}
              </h3>
              <h4 className="text-gray-500 text-sm">
                {data[0].eventDate.toDateString()}
              </h4>
            </div>
            <div className="flex justify-center">
              <FeedbackPreview {...data[0]} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
