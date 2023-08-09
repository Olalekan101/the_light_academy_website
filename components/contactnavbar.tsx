import { PiTimerThin } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const ContactDetails = [
  {
    icon: <PiTimerThin />,
    title: "Mon-Fri:8:00am-7:00pm",
  },
  {
    icon: <BsFillTelephoneFill />,
    title: "07010174548",
  },
  {
    icon: <FiMapPin />,
    title: "Street 232, Tropical Center, Dhaka",
  },
];

const SocialMediaLinks = [
  {
    icon: <TiSocialFacebook />,
    link: "/",
  },
  {
    icon: <AiOutlineInstagram />,
    link: "/",
  },
  {
    icon: <AiOutlineTwitter />,
    link: "/",
  },
  {
    icon: <BiLogoLinkedin />,
    link: "/",
  },
];

export default function Contactnavbar() {
  return (
    <section className="w-full p-2 bg-orange-400 text-white">
      <div className="main-container flex justify-between items-center">
        <div className="flex gap-4">
          {ContactDetails.map((details, index) => (
            <div key={index} className="flex items-center gap-1">
              <div className="">{details.icon}</div>
              <div className="text-sm">{details.title}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          {SocialMediaLinks.map((links, index) => (
            <Link key={index} href={links.link}>
              {links.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
