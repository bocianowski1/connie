"use client";
import { MessageOverview, messageData } from "@/app/bedrift/dashboard/data";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useRef, useState } from "react";
export const MessageComponent = ({ m }: { m: MessageOverview }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollableContainerRef.current?.scrollTo({
      top: bottomRef.current?.offsetTop,
      behavior: "smooth",
    });
  };
  const [text, setText] = useState("");
  const [messages, setMessages] = useState(m.messages);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSend = () => {
    if (!text.trim()) {
      return;
    }
    setMessages([
      ...messages,
      {
        content: text,
        sentAt: new Date(),
        sender: "Liraly me",
      },
    ]);
    setText("");
    scrollToBottom();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col p-10 m-4 bg-offwhite rounded-lg gap-2">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">{m.id}</p>
        <Link href="/bedrift/dashboard">Tilbake</Link>
      </div>

      <hr className="my-2" />
      <div
        className="flex flex-col h-[500px] overflow-y-scroll"
        ref={scrollableContainerRef}
      >
        <div className="mt-auto" />
        {messages.map((message, i) => {
          return (
            <div key={`${message.content}${message.sentAt}`}>
              <p
                className={cn("p-2 rounded-lg border w-fit", {
                  "mr-auto": message.sender === m.id,
                  "ml-auto bg-blue-500 text-white": message.sender !== m.id,
                })}
              >
                {message.content}
              </p>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className="w-full p-2 border rounded-lg flex items-center bg-white">
        <textarea
          className="p-2 text-lg w-full outline-0 resize-none"
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleTextChange}
        />
        <div className="p-3">
          <button
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-300"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
