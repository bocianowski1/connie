type Message = {
  contactID: string;
  sentAt: string;
  message: string;
};

const messages: Array<Message> = [
  { contactID: "1", sentAt: "17:35", message: "Hello" },
  { contactID: "1", sentAt: "17:38", message: "yeeet" },
  { contactID: "2", sentAt: "16:31", message: "World" },
  { contactID: "3", sentAt: "11:31", message: "wooowaa!" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <div className="max-w-72 flex flex-col h-full bg-black">
        <p>arsoitenarsoitenarsoiten</p>
        <p>arsoitenarsoitenarsoiten</p>
        <p>arsoitenarsoitenarsoiten</p>
        <p>arsoitenarsoitenarsoiten</p>
        <p>arsoitenarsoitenarsoiten</p>
        <p>arsoitenarsoitenarsoiten</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
