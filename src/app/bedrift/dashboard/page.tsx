import { FeedbackPreview } from "@/components/feedback-preview";

import { Feedbacks } from "./data";
import Link from "next/link";

export default function DashBoard() {
  const feedback = Feedbacks[0];
  return (
    <div className="grid grid-cols-2">
      <Link href="/bedrift/kontrakter" className="border m-2 p-4 rounded-lg hover:bg-lightgray">
        <p className="text-center text-2xl">Kontrakter</p>
      </Link>
      <Link href="/bedrift/tilbakemeldinger" className="border m-2 p-4 rounded-lg hover:bg-lightgray">
        <p className="text-center text-2xl">Alle tilbakemeldinger</p>
      </Link>{" "}
      <div className="col-span-2 m-2 p-4 rounded-lg border">
        <h3 className="text-2xl text-center font-bold mb-4">
          Tilbakemeldinger for siste arrangement
        </h3>
        <p className="text-xl text-center">{feedback.eventTitle}</p>
        <p className="text-center mb-6">{feedback.eventDate.toDateString()}</p>
        <div className="flex">
          <FeedbackPreview {...feedback} />
        </div>
      </div>
    </div>
  );
}
