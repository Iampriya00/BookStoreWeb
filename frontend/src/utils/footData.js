import { IoMdPin, IoMdCall } from "react-icons/io";

const data = [
  { items: "Home", path: "/" },
  { items: "About", path: "/about" },
  { items: "Service", path: "/service" },
];

const contactInfo = [
  {
    icon: IoMdPin,
    contact: "Level 18, 123 Eagle Street, Brisbane, Queensland 4000 Australia",
    path: "/",
  },
  { icon: IoMdCall, contact: "892058220", path: "/" },
];
const dateHelper = () => {
  return new Date().getFullYear();
};

export { data, contactInfo, dateHelper };
