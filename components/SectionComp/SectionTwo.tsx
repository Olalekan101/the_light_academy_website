"use client";
import React, { useState } from "react";
import Image from "next/image";
import sectionthreeimage from "@/public/section_two_image.png";
import teacherimg from "@/public/SectionTwoImg/femaleteacher.png";
import classimg from "@/public/SectionTwoImg/lesson.png";
import studentimg from "@/public/SectionTwoImg/students.png";
import { useInView, useMotionValue } from "framer-motion";
import { useSpring, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import CountUp from "react-countup";

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

export default function SectionTwo() {
  const [startcount, setCount] = useState(false);
  const viewRef = useRef(null);
  const inveiw = useInView(viewRef, { once: true, amount: 1 });
  const motionValue = useMotionValue(0);
  const initialCount = useSpring(motionValue);
  useEffect(() => {
    if (inveiw) {
      setCount(true);
    }
  }, [inveiw]);
  // console.log(initialCount);
  function Card({ imgurl, numbers, title }: CardProps) {
    return (
      <div className="aspect-square flex flex-col justify-center items-center gap-2 w-[200px] rounded-md bg-yellow-50 p-3">
        <Image src={imgurl} alt="section two images" width={100} />
        <div className="font-extrabold text-xl">
          {startcount ? <CountUp start={0} end={numbers} duration={3} /> : 0}
        </div>
        <div className="">{title}</div>
      </div>
    );
  }

  return (
    <section ref={viewRef} className=" relative h-full mt-[70px] ">
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
