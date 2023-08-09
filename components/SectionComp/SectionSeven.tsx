import React from "react";
import secfour from "@/public/SectionFourImg/secfour.jpg";
import secfour2 from "@/public/SectionFourImg/secfour2.jpg";
import secfour3 from "@/public/SectionFourImg/secfour3.jpg";
import twoimg from "@/public/SectionThreeImg/two.webp";
import threeimg from "@/public/SectionThreeImg/three.webp";
import fourimg from "@/public/SectionThreeImg/four.webp";
import Image from "next/image";
import { BsPlusCircle } from "react-icons/bs";

const CardData = [
  {
    img: secfour,
    title: "Play Ground",
  },
  {
    img: secfour2,
    title: "Play Ground",
  },
  {
    img: secfour3,
    title: "Play Ground",
  },
  {
    img: twoimg,
    title: "Play Ground",
  },
  {
    img: threeimg,
    title: "Play Ground",
  },
  {
    img: fourimg,
    title: "Play Ground",
  },
  {
    img: fourimg,
    title: "Play Ground",
  },
  {
    img: threeimg,
    title: "Play Ground",
  },
  {
    img: fourimg,
    title: "Play Ground",
  },
];

export default function SectionSeven() {
  return (
    <section className="main-container mt-20 mb-20">
      <div className=" flex flex-col justify-center items- relative">
        <div className="text-3xl text-center font-bold text-black">
          Our Gallary
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-3 gap-2 relative">
            {CardData.map((data, index) => (
              <div
                className="relative aspect-square group rounded-lg overflow-clip "
                key={index}
              >
                <Image src={data.img} alt="img" fill className="object-cover" />
                <div className="absolute inset-0 flex flex-col gap-2 text-white justify-center items-center bg-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-100">
                  <BsPlusCircle className="text-3xl" />
                  <div className="text-sm">{data.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
