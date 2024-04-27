import { notFound } from "next/navigation";
import { messageData } from "../../data";
import { MessageComponent } from "@/components/messages";

export default function Message ({
  params
}: {
  params: { contactID: string };
}) {
  const m = messageData.find((m) => m.id === params.contactID);

  if (!m) {
    return notFound();
  }

  return (
    <MessageComponent m={m} />
  );
}