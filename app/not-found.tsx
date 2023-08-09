import Contactnavbar from "@/components/contactnavbar";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ImHome } from "react-icons/im";

export default function NotFound() {
  return (
    <div className="bg-yellow-50 flex flex-col min-h-screen">
      <header>
        <Contactnavbar />
        <Navbar />
      </header>
      <div className="main-container flex flex-col justify-center items-center h-full">
        <h2 className="text-2xl font-extrabold">Page Not Found</h2>
        <Link href={"/"}>
          <ImHome />
        </Link>
      </div>
    </div>
  );
}
