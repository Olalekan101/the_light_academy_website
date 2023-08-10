"use client";
import Image from "next/image";
import sectionfourimg from "@/public/section_4img.png";
import secfour from "@/public/SectionFourImg/secfour.jpg";
import secfour2 from "@/public/SectionFourImg/secfour2.jpg";
import secfour3 from "@/public/SectionFourImg/secfour3.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, Fragment } from "react";

const CardData = [
  {
    imgurl: secfour,
    title: "PAINTING CLASS FOR YOUNG CHILDREN",
    subtitle: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
  {
    imgurl: secfour2,
    title: "DANCE CLASS FOR YOUNG CHILDERN",
    subtitle: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
  {
    imgurl: secfour3,
    title: "MUSIC CLASS FOR TODDLERS",
    subtitle: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
];

type CardProps = {
  imgurl: any;
  title: string;
  subtitle: any;
  year: number;
  classSize: number;
  educator: number;
};

function Card({
  imgurl,
  title,
  subtitle,
  classSize,
  educator,
  year,
}: CardProps) {
  return (
    <div className="flex flex-col rounded-md overflow-clip w-[250px] h-fit">
      <div className="aspect-video relative">
        <Image
          src={imgurl}
          alt="section three image"
          className="object-cover"
          fill
        />
      </div>
      <div className=" relative px-8 py-5 bg-white flex flex-col h-fit gap-2 text-center ">
        <div className="font-bold text-base">{title}</div>
        <div className="text-sm">{subtitle}</div>
      </div>
      <div className=" relative px-8 py-2 bg-yellow-50 flex justify-center items-center h-fit gap-2 text-center ">
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold text-base text-orange-400 ">{year}</div>
          <div className="text-xs">Years old</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold text-base text-orange-400 ">
            {classSize}
          </div>
          <div className="text-xs">Class size</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold text-base text-orange-400 ">{educator}</div>
          <div className="text-xs">Educator</div>
        </div>
      </div>
    </div>
  );
}

export default function SectionFour() {
  const secRef = useRef(null);
  const inViewRef = useInView(secRef, {
    // root: secRef,
    once: true,
    amount: 0.8,
  });
  const animate = useAnimation();
  useEffect(() => {
    if (inViewRef) {
      animate.start("visible");
    }
  }, [inViewRef]);
  return (
    <section ref={secRef} className=" relative h-full mt-[10px] ">
      <div className=" main-container flex flex-col gap-6 justify-center mt-16 w-full relative z-10">
        <div className="text-3xl text-center font-bold text-white">
          Our Classes
        </div>
        <div className="main-container">
          <section className="flex justify-between items-center gap-2 mt-16">
            {CardData.map((card, index) => (
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
                key={index}
                className=""
              >
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  imgurl={card.imgurl}
                  classSize={40}
                  educator={6}
                  year={3.5}
                />
              </motion.div>
            ))}
          </section>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full">
        <Image
          src={sectionfourimg}
          alt="Hreo Image"
          className=" object-contain"
          priority
        />
      </div>
    </section>
  );
}
