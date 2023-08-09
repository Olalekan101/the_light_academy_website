"use client";
import React, { useState } from "react";
import Image from "next/image";
import sectionthreeimage from "@/public/section_two_image.png";
import teacherimg from "@/public/SectionTwoImg/femaleteacher.png";
import classimg from "@/public/SectionTwoImg/lesson.png";
import studentimg from "@/public/SectionTwoImg/students.png";
import { useInView, useMotionValue } from "framer-motion";
import { useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

const CardData = [
  {
    imgurl: teacherimg,
    numbers: 1250,
    title: "No of Teachers",
  },
  {
    imgurl: studentimg,
    numbers: 13350,
    title: "No of Students",
  },
  {
    imgurl: classimg,
    numbers: 150,
    title: "No of Subjects",
  },
];

type CardProps = {
  imgurl: any;
  numbers: any;
  title: string;
};

function Card({ imgurl, numbers, title }: CardProps) {
  return (
    <div className="aspect-square flex flex-col justify-center items-center gap-2 w-[200px] rounded-md bg-yellow-50 p-3">
      <Image src={imgurl} alt="section two images" width={100} />
      <div className="font-extrabold text-xl">{numbers}</div>
      <div className="">{title}</div>
    </div>
  );
}

export default function SectionTwo() {
  const [startcount, setCount] = useState(false);
  const viewRef = useRef(null);
  const inveiw = useInView(viewRef, { once: true });
  const motionValue = useMotionValue(0);
  const initialCount = useSpring(motionValue);
  useEffect(() => {
    motionValue.set(100);
  }, [initialCount]);
  // console.log(initialCount);

  return (
    <section ref={viewRef} className=" relative h-full mt-[70px] ">
      <div className="text-xl text-black">{initialCount.get()}</div>
      <div className="main-container w-full   relative z-10 h-full">
        <div className="flex justify-center items-center gap-4 translate-y-[350px]">
          {CardData.map((data, index) => (
            <div className="" key={index}>
              {Card({
                imgurl: data.imgurl,
                numbers: data.numbers,
                title: data.title,
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 w-full h-full">
        <Image
          src={sectionthreeimage}
          alt="Hreo Image"
          className=" object-contain"
          priority
        />
      </div>
    </section>
  );
}
