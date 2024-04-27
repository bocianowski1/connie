import { messageData } from "./data";

type Message = {
  contactID: string;
  sentAt: string;
  message: string;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-1 max-w-screen-xl mx-auto w-full">
      <ul className="max-w-[250px] w-full flex flex-col h-full divide-y border-r border-gray-300 divide-gray-300">
        <p className="text-lg font-bold p-4">Meldinger</p>
        {messageData.map((message) => (
          <li key={message.id}>
            <a href={`/bedrift/dashboard/meldinger/${message.id}`}>
              <div className="flex items-center gap-2 px-4 py-6 hover:bg-gray-200 transition-all">
                <div className="h-10 w-10 rounded-full bg-gray-300 border" />

                <div className="flex flex-col gap-1">
                  <p className="text-lg">{message.id}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="w-full">{children}</div>
    </div>
  );
}
