import { Feedback } from "@/app/bedrift/dashboard/data";
import Image, { StaticImageData } from "next/image";

export function FeedbackPreview({
  eventDate,
  eventTitle,
  graph,
  numberOfParticipants,
}: Feedback) {
  return (
    <div className="flex border p-6 rounded-lg">
      <div>
        <Image src={graph} alt="graph" height={300}></Image>
        <p>
            Vurdering:
        </p>
        <div className="flex justify-evenly">
          <div className="mr-8">1/4</div>
          <div className="mr-8">2/4</div>
          <div className="mr-8">3/4</div>
          <div className="mr-8">4/4</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col bg-lightgray items-center justify-center h-36 w-36 border rounded-3xl">
          <p> Antall deltakere</p>
          <div className="text-3xl font-extrabold ">{numberOfParticipants}</div>
        </div>
        <div className="flex flex-col bg-lightgray items-center justify-center h-36 w-36 border rounded-3xl">
          <p> Dukket ikke opp:</p>
          <div className="text-3xl font-extrabold ">4</div>
        </div>
      </div>
    </div>
  );
}
