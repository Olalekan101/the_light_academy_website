import { BiHomeHeart, BiSupport } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TfiWrite } from "react-icons/tfi";
import { GrContactInfo, GrPlan } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";
import MainButton from "./mainButton";
import ThemeButton from "./ThemeButton";
const NavData = [
  {
    icon: <BiHomeHeart />,
    title: "Home",
    link: "/",
  },
  {
    icon: <HiOutlineNewspaper />,
    title: "Pages",
    link: "/",
  },
  {
    icon: <TfiWrite />,
    title: "Blog",
    link: "/",
  },
  {
    icon: <GrContactInfo />,
    title: "Contacts",
    link: "/",
  },
  {
    icon: <GrPlan />,
    title: "Plans",
    link: "/",
  },
  {
    icon: <FcAbout />,
    title: "About",
    link: "/",
  },
  {
    icon: <BiSupport />,
    title: "Support",
    link: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center main-container py-5">
      <section>
        <h1 className="font-bold text-xl text-slate-900">The Light Academy</h1>
      </section>
      <section className="flex  gap-5">
        {NavData.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            className="flex flex-col justify-center items-center gap-1 hover:opacity-50 text-slate-900"
          >
            <div className="">{data.icon}</div>
            <div className="text-sm">{data.title}</div>
          </Link>
        ))}
      </section>
      <section className="flex justify-center items-center gap-4">
        {/* <ThemeButton /> */}
        {MainButton("Check")}
      </section>
    </nav>
  );
}
