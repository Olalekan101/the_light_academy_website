"use client";
import { pangolin } from "@/app/font";
import MainButton from "../mainButton";
import Image from "next/image";
import imgone from "@/public/SectionOneImg/one.png";
import imgtwo from "@/public/SectionOneImg/two.png";
import imgthree from "@/public/SectionOneImg/three.png";
import imgfour from "@/public/SectionOneImg/four.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, Fragment } from "react";
import SectionWarpper from "./SectionWarpper/SectionWarpper";

const Lists = [
  {
    item: "Table/Floor Toys",
  },
  {
    item: "Creative Activities",
  },
  {
    item: "Self Development",
  },
  {
    item: "Sports Activities",
  },
];

const images = [imgone, imgtwo, imgthree, imgfour];

// function ImageWrapper(src, index) {
//   return (
//     <div key={index} className="absolute inset-0">
//       <Image src={src} alt="section one images" />
//     </div>
//   );
// }

export default function SectionOne() {
  const secRef = useRef(null);
  const inViewRef = useInView(secRef, {
    // root: secRef,
    once: true,
    amount: 1,
  });
  const animate = useAnimation();
  useEffect(() => {
    if (inViewRef) {
      animate.start("visible");
    }
  }, [inViewRef]);

  return (
    <section ref={secRef} className=" w-full mt-[480px]">
      <div className="main-container flex justify-between gap-20">
        {/* frist half */}
        <motion.div className="relative w-[50%]">
          {images.map((img, index) => (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: (index) => ({
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.2,
                  },
                }),
              }}
              custom={index}
              initial="hidden"
              animate={animate}
              key={index}
              className="absolute inset-0"
            >
              <Image src={img} alt="section one images" />
            </motion.div>
          ))}
        </motion.div>
        {/* second half */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 10,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          initial="hidden"
          animate={animate}
          className="flex flex-col gap-4 w-[50%] translate-y-20"
        >
          <div className={`${pangolin.className}`}>About Us</div>
          <div className="text-3xl font-extrabold">Unique Learning</div>
          <div className="flex">
            <hr className="bg-orange-400 w-1 gap-4" />
            <div className="text-sm h-auto flex gap-4">
              <span className="w-2 h-fill bg-orange-400" />
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, quas? Nostrum quos similique molestias temporibus
                corporis quisquam aperiam fuga officiis.
              </span>
            </div>
          </div>
          <div className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, autem.
          </div>
          <div className="">
            <ul className="grid grid-cols-2 gap-2 ">
              {Lists.map((list, index) => (
                <li key={index} className="flex gap-2 items-center text-sm">
                  <span className="w-2 bg-orange-400 h-2 rounded-full" />
                  {list.item}
                </li>
              ))}
            </ul>
          </div>
          <div className="">{MainButton("Join For Free")}</div>
        </motion.div>
      </div>
    </section>
  );
}
