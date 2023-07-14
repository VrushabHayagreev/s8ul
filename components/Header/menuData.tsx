import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Creators",
    path: "/blog",
    newTab: false,
  },
  
  {
    id: 5,
    title: "Esports",
    path: "/esports",
    newTab: false,
  },
  {
    id: 6,
    title: "Achievements",
    path: "/ach",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Shop ",
        path: "https://www.instagram.com/s8ulstore.in/?hl=en",
        newTab: false,
      },
      {
        id: 44,
        title: "8bit Creatives ",
        path: "https://8bitcreatives.in/",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact ",
        path: "/contact",
        newTab: false,
      },
      
    ],
  },
];
export default menuData;
