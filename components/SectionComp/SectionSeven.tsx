"use client";
import React from "react";
import secfour from "@/public/SectionFourImg/secfour.jpg";
import secfour2 from "@/public/SectionFourImg/secfour2.jpg";
import secfour3 from "@/public/SectionFourImg/secfour3.jpg";
import twoimg from "@/public/SectionThreeImg/two.webp";
import threeimg from "@/public/SectionThreeImg/three.webp";
import fourimg from "@/public/SectionThreeImg/four.webp";
import Image from "next/image";
import { BsPlusCircle } from "react-icons/bs";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, Fragment } from "react";

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
  const secRef = useRef(null);
  const inViewRef = useInView(secRef, {
    // root: secRef,
    once: true,
    amount: 0.5,
  });
  const animate = useAnimation();
  useEffect(() => {
    if (inViewRef) {
      animate.start("visible");
    }
  }, [inViewRef]);
  return (
    <section ref={secRef} className="main-container mt-20 mb-20">
      <div className=" flex flex-col justify-center items- relative">
        <div className="text-3xl text-center font-bold text-black">
          Our Gallary
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-3 gap-2 relative">
            {CardData.map((data, index) => (
              <motion.div
                variants={{
                  hidden: {
                    y: 5,
                    opacity: 0,
                  },
                  visible: (index) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: index * 0.2,
                      ease: "easeInOut",
                    },
                  }),
                }}
                initial="hidden"
                animate={animate}
                transition={{
                  duration: 0.5,
                }}
                custom={index}
                className="relative aspect-square group rounded-lg overflow-clip "
                key={index}
              >
                <Image src={data.img} alt="img" fill className="object-cover" />
                <div className="absolute inset-0 flex flex-col gap-2 text-white justify-center items-center bg-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-100">
                  <BsPlusCircle className="text-3xl" />
                  <div className="text-sm">{data.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
