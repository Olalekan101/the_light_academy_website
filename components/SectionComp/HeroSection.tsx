"use client";
import React from "react";
import Image from "next/image";
import heroimg from "@/public/HeroImageMain.webp";
import MainButton from "../mainButton";
import { pangolin } from "@/app/font";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [complete, setComplete] = useState(false);
  const herotext = ["We", "Help", "To", "Develop"];
  const herotext2 = ["Your", "Childern"];
  const textvariant = {
    initial: {
      opacity: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      transition: {
        delay: index * 0.2,
      },
    }),
    exit: {
      opacity: 0,
    },
  };
  const textvariant2 = {
    initial: {
      opacity: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      transition: {
        delay: index * 0.2,
      },
    }),
    exit: {
      opacity: 0,
    },
  };

  const HeroAnimate = () => {
    return (
      <div className="">
        <div className=" flex flex-col gap-2">
          <motion.div className="flex gap-2">
            {herotext.map((text, index) => (
              <motion.span
                key={index}
                variants={textvariant}
                initial="initial"
                animate="animate"
                custom={index}
                onAnimationComplete={() => setComplete(true)}
              >
                {text}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex gap-2">
            {herotext2.map((text, index) => (
              <motion.span
                key={index}
                variants={textvariant2}
                initial="initial"
                animate="animate"
                custom={index}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className=" relative h-full ">
        <div className="main-container flex  relative z-10 h-full">
          <div className="flex flex-col gap-4 translate-y-28">
            <div className={`${pangolin.className} text-xl`}>
              Welcome to The Light
            </div>
            <div className={`font-extrabold text-6xl`}>
              <HeroAnimate />
            </div>
            <div className="text-sm">
              <p>
                Holisticly Impact transparent methods of empowerment
                <br />
                whereas empowered e-commerce
              </p>
            </div>
            <div className="">{MainButton("Book A Visit", "text-xl")}</div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <Image
            src={heroimg}
            alt="Hreo Image"
            className=" object-contain"
            priority
          />
        </div>
      </section>
    </>
  );
}
// {
//   /* <Image src={hero} alt="Hero Image" className="object-cover w-full" /> */
// }
