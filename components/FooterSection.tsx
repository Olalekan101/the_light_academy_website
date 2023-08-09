import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import MainButton from "./mainButton";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

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

const FooterListData = [
  {
    title: "LIGHT",
    links: [
      {
        link: "/",
        name: "Home",
      },
      {
        link: "/",
        name: "About",
      },
      {
        link: "/",
        name: "Blog",
      },
      {
        link: "/",
        name: "Plans",
      },
      {
        link: "/",
        name: "Leadership",
      },
    ],
  },
];
const FooterListData2 = [
  {
    title: "Support",
    links: [
      {
        link: "/",
        name: "Help Center",
      },
      {
        link: "/",
        name: "Contacts Us",
      },
      {
        link: "/",
        name: "Faq",
      },
      {
        link: "/",
        name: "Tickets",
      },
      {
        link: "/",
        name: "Parents community",
      },
    ],
  },
];
const FooterListData3 = [
  {
    title: "Location",
    links: [
      {
        name: "Zone 4, Warri",
      },
      {
        name: "esanolasunny@gmail.com",
      },
      {
        name: "07010174548",
      },
    ],
    icon: [<ImLocation />, <MdEmail />, <BsTelephoneFill />],
    btn: true,
  },
];

type footer = {
  links: any;
  title: string;
  icon?: any;
  btn?: boolean;
};

function FooterList({ links, title, icon, btn }: footer) {
  return (
    <div className="flex flex-col justify-start gap-2 relative">
      <div className="text-lg">{title}</div>
      <div className="relative  w-[100px]">
        <Image src="/footer_line.png" fill alt="image" />
      </div>
      <ul className="flex flex-col justify-start items-start text-sm">
        <li className="flex items-center justify-center">
          <div className="flex flex-col pr-2 gap-2 h-full justify-center items-center">
            {icon}
          </div>
          <div
            className={`${
              icon && "font-bold"
            } "flex justify-center items-center h-full"`}
          >
            {links}
          </div>
        </li>
      </ul>
      <div className="">{btn && <button>"Book a Trip</button>}</div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <section className=" bg-black text-white min-h-[200px]">
      <div className="main-container ">
        <div className="grid grid-cols-3 justify-between py-10">
          <div className="flex flex-col justify-start gap-2">
            <div className="text-3xl after:text-green-400 after:text-4xl after:blur-lg">
              The Light
            </div>
            <div className="text-left text-sm mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              eius.
            </div>
            <div className="flex text-lg gap-4 items-center">
              {SocialMediaLinks.map((links, index) => (
                <Link key={index} href={links.link}>
                  {links.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            {FooterListData.map((data) => (
              <>
                <FooterList
                  links={data.links.map((x) => (
                    <div className="flex flex-col gap-4">{x.name}</div>
                  ))}
                  title={data.title}
                />
              </>
            ))}
            {FooterListData2.map((data) => (
              <>
                <FooterList
                  links={data.links.map((x) => (
                    <div className="flex flex-col gap-4">{x.name}</div>
                  ))}
                  title={data.title}
                />
              </>
            ))}
          </div>
          <div className="">
            {FooterListData3.map((data) => (
              <>
                <FooterList
                  links={data.links.map((x) => (
                    <div className="flex flex-col gap-4">{x.name}</div>
                  ))}
                  title={data.title}
                  icon={...data.icon}
                />
              </>
            ))}
          </div>
        </div>
        <div className="text-xs text-white">
          2023 THE-LIGHT All Rights reserved-Powered by Olalekan
        </div>
      </div>
    </section>
  );
}
