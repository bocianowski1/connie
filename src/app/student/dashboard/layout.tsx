import { messageData } from "./data";
import Image from "next/image";

export default function StudentDashboardLayout(
    { children }: Readonly<{ children: React.ReactNode }>
    ) {
    return <div className="flex h-full flex-1 max-w-screen-xl mx-auto w-full">
      <ul className="max-w-[250px] w-full flex flex-col h-full divide-y border-r border-gray-300 divide-gray-300">
        <p className="text-lg font-bold p-4">Meldinger</p>
        {messageData.map((message) => (
          <li key={message.id}>
            <a href={`/student/dashboard/meldinger/${message.id}`}>
              <div className="flex items-center gap-2 px-4 py-6 hover:bg-gray-200 transition-all">
                <div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border md:h-20 md:w-20">
                    <Image src={message.imageURI} alt={message.id} fill className="object-contain"/>
                  </div>
                </div>

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
    }
