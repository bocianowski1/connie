export type Message = {
  sender: string;
  content: string;
  sentAt: Date;
};

export type MessageOverview = {
  id: string;
  name: string;
  imageURI: string;
  messages: Array<Message>;
};

export const messageData: Array<MessageOverview> = [
  {
    id: "bekk",
    name: "Bekk",
    imageURI: "/bedrifter/bekk.png",
    messages: [
      {
        sender: "helix",
        content: "Hei fra helix!",
        sentAt: new Date(),
      }, 
      {
        sender: "helix",
        content: "Hvordan går det?",
        sentAt: new Date(),
      },
      {
        sender: "bekk",
        content: "Hei, det går bra!",
        sentAt: new Date(),
      }
    ],
  },
  {
    id: "DNB",
    name: "DNB",
    imageURI: "/bedrifter/dnb.png",
    messages: [
      {
        sender: "bekk",
        content: "Hello",
        sentAt: new Date(),
      },
    ],
  },
];
