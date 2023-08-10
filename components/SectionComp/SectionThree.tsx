"use client";
import Image from "next/image";
import oneimg from "@/public/SectionThreeImg/one.webp";
import twoimg from "@/public/SectionThreeImg/two.webp";
import threeimg from "@/public/SectionThreeImg/three.webp";
import fourimg from "@/public/SectionThreeImg/four.webp";
import { pangolin } from "@/app/font";
import MainButton from "../mainButton";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, Fragment } from "react";

const CardData = [
  {
    imgurl: oneimg,
    title: "Open Session",
    subtitle: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
  {
    imgurl: twoimg,
    title: "Class Trips",
    subtitle: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
  {
    imgurl: threeimg,
    title: "Birthday Party",
    subtitle: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
];
// const CardData = [
//   {
//     imgurl: oneimg,
//     title: "PAINTING CLASS FOR YOUNG CHILDREN",
//     subtitle: (
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
//         repellendus? Qui sit ab fuga? Error!
//       </p>
//     ),
//   },
//   {
//     imgurl: twoimg,
//     title: "DANCE CLASS FOR YOUNG CHILDERN",
//     subtitle: (
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
//         repellendus? Qui sit ab fuga? Error!
//       </p>
//     ),
//   },
//   {
//     imgurl: threeimg,
//     title: "MUSIC CLASS FOR TODDLERS",
//     subtitle: (
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
//         repellendus? Qui sit ab fuga? Error!
//       </p>
//     ),
//   },
// ];

type CardProps = {
  imgurl: any;
  title: string;
  subtitle: any;
};

function Card({ imgurl, title, subtitle }: CardProps) {
  return (
    <div className="flex flex-col">
      <div className="aspect-square w-[300px] relative">
        <Image
          src={imgurl}
          alt="section three image"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col mx-auto -translate-y-1/2 p-4 gap-2 bg-yellow-50 border-b-2 border-b-orange-400  border-t-2 border-t-orange-400 rounded-md aspect-video w-[250px] text-center justify-center">
        <div className="font-extrabold">{title}</div>
        <div className="line-clamp-3 text-sm">{subtitle}</div>
      </div>
    </div>
  );
}

export default function SectionThree() {
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
    <section
      ref={secRef}
      className="main-container flex flex-col justify-center items-center mt-[550px]"
    >
      <div className="text-2xl font-extrabold">Kid's Fun Center</div>
      <div className="flex gap-2 mt-5">
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
            className=""
            key={index}
          >
            {Card({
              imgurl: data.imgurl,
              title: data.title,
              subtitle: data.subtitle,
            })}
          </motion.div>
        ))}
      </div>
      <motion.div
        transition={{ delay: 2 }}
        className="flex mt-10 justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="aspect-square w-[400px] rounded-md overflow-clip"
        >
          <Image src={fourimg} alt="section three image" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 w-[50%] translate-y-[20px]"
        >
          <div className="">
            <div className={`${pangolin.className} text-orange-500`}>
              Why Choose Us
            </div>
            <div className="capitalize  text-2xl font-bold">
              New Approach to Fun
            </div>
          </div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quisquam cum alias est nisi magni maxime dignissimos deleniti
            veritatis doloremque.
          </div>
          <div className="">{MainButton("FIND EVENTS")}</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
