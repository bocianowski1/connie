import { notFound } from "next/navigation";
import { messageData } from "../../data";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { MessageComponent } from "@/components/messages";

export default function Messages({
  params,
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
