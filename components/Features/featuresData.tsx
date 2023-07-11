import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon : "data:image/png;base64,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",
    title: "PUBG Mobile",
    paragraph:
      "PUBG Mobile is a free-to-play battle royale video game developed by LightSpeed & Quantum Studio, a division of Tencent Games. It is a mobile game adaptation of PUBG: Battlegrounds",
  },
  {
    id: 1,
    icon: "https://i.pinimg.com/736x/59/0c/a7/590ca77b4d95284a9e16017234f683c5.jpg",
    title: "BGMI",
    paragraph:
      "Battlegrounds Mobile India (BGMI, previously known as PUBG Mobile India) is the Indian version of PUBG Mobile, exclusively for players in India. It is an online multiplayer battle royale game developed and published by Krafto",
  },
  {
    id: 1,
    icon: "https://lh3.googleusercontent.com/Uzo_GQXZXc1Nsj7OY3dbfRDam0TjTzV4A1dhgSYLzkdrygVRDZgDMv7JME4kEAkS0UFa0MdJevzXynIlc7X6yXRSEV2-XkrRpX1QzJts9-a6=e365-s0",
    title: "Pokemon GO",
    paragraph:
      "Pokémon is a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company under the ''Pokémon'' media franchise",
  },
  {
    id: 1,
    icon: "https://www.citypng.com/public/uploads/preview/-416064762261taxkpnzaq.png",
    title: "Call of duty",
    paragraph:
      "Call of Duty is an American video game series and media franchise published by Activision. Starting in 2003, the games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games.",
  },
  {
    id: 1,
    icon: "https://i.pinimg.com/originals/1c/c6/25/1cc625b5e3cb0c3dbe821162c65371b7.jpg",
    title: "Clash of clans",
    paragraph:
      "Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by Finnish game developer Supercell. ",
  },
  {
    id: 1,
    icon: "https://i.scdn.co/image/ab6761610000e5eb08155a63a9480356177d3259",
    title: "garena free arena",
    paragraph:
      "Free Fire MAX is designed exclusively to deliver premium gameplay experience in a Battle Royale. Enjoy a variety of exciting game modes with all Free Fire players via exclusive Firelink technology",
  },
 
];
export default featuresData;
