import Image from "next/image";
import dynamic from "next/dynamic";
import HeroSection from "@/components/SectionComp/HeroSection";

const SectionOneX = dynamic(
  () => import("@/components/SectionComp/SectionOne"),
  { loading: () => <div>loading...</div> }
);
const SectionTwoX = dynamic(
  () => import("@/components/SectionComp/SectionTwo"),
  { loading: () => <div>loading...</div> }
);
const SectionThreeX = dynamic(
  () => import("@/components/SectionComp/SectionThree"),
  { loading: () => <div>loading...</div> }
);
const SectionFourx = dynamic(
  () => import("@/components/SectionComp/SectionFour"),
  { loading: () => <div>loading...</div> }
);
const SectionFivex = dynamic(
  () => import("@/components/SectionComp/SectionFive"),
  { loading: () => <div>loading...</div> }
);
const SectionSixx = dynamic(
  () => import("@/components/SectionComp/SectionSix"),
  { loading: () => <div>loading...</div> }
);
const SectionSevenx = dynamic(
  () => import("@/components/SectionComp/SectionSeven"),
  { loading: () => <div>loading...</div> }
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <HeroSection />
      <SectionOneX />
      <SectionTwoX />
      <SectionThreeX />
      <SectionFourx />
      <SectionFivex />
      <SectionSixx />
      <SectionSevenx />
    </main>
  );
}
