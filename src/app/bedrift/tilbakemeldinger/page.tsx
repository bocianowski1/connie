import { FeedbackOverview } from "@/components/feedback-overview";
import { Feedbacks } from "../dashboard/data";

export default function PreviousFeedbacks() {
  return (
    <div className="px-32 w-full space-y-8 pb-12 max-w-screen-2xl">
      <h1 className="text-5xl text-balance font-serif font-medium">
        Tilbakemeldinger
      </h1>
      <div className="space-y-4">
        <h2 className="text-3xl text-balance font-serif font-medium">
          Arrangementer
        </h2>
        <FeedbackOverview data={Feedbacks} />
      </div>
    </div>
  );
}
