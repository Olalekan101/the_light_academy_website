import Image from "next/image";
import sectionfourimg from "@/public/section_4img.png";
import secfour from "@/public/SectionFourImg/secfour.jpg";
import secfour2 from "@/public/SectionFourImg/secfour2.jpg";
import secfour3 from "@/public/SectionFourImg/secfour3.jpg";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const CardData = [
  {
    imgurl: secfour,
    title: "Chike",
    subtitle: "Captain",
    discription: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
  {
    imgurl: secfour,
    title: "Chike",
    subtitle: "Captain",
    discription: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
  {
    imgurl: secfour,
    title: "Chike",
    subtitle: "Captain",
    discription: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        repellendus? Qui sit ab fuga? Error!
      </p>
    ),
  },
  {
    imgurl: secfour,
    title: "Chike",
    subtitle: "Captain",
    discription: (
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
  discription: any;
};

function Card({ imgurl, title, subtitle, discription }: CardProps) {
  return (
    <div className="flex flex-col rounded-md overflow-clip w-full h-fit bg-yellow-50 px-10 py-5">
      <div className="font-bold text-4xl text-orange-500">
        <BiSolidQuoteLeft />
      </div>
      <div className="">{discription}</div>
      <div className="flex justify-between items-center gap-2 mt-5">
        <div className="  flex justify-start items-center text-center gap-2 ">
          <div className="h-20 w-20 rounded-full relative overflow-clip">
            <Image
              src={imgurl}
              alt="section three image"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col text-start">
            <div className="font-bold text-base">{title}</div>
            <div className="text-sm">{subtitle}</div>
          </div>
        </div>
        <div className="flex gap-1 text-yellow-500">
          {new Array(6).fill(5).map((_, index) => (
            <AiFillStar />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SectionSix() {
  return (
    <section className=" relative h-full mt-[10px] ">
      <div className=" main-container flex flex-col justify-center items-center mt-16 w-full relative z-10 overflow-clip">
        <div className="text-3xl text-center font-bold text-white">
          What Are Students Saying
        </div>
        <div className="text-sm text-center w-[30%] mx-auto flex justify-center items-center text-white mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          tempora numquam rerum
        </div>
        <div className="main-container scale-90 -translate-y-10">
          <section className="grid grid-cols-2 justify-between items-center gap-2 mt-10">
            {CardData.map((card, index) => (
              <div key={index} className="">
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  imgurl={card.imgurl}
                  discription={card.discription}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full">
        <Image
          src={sectionfourimg}
          alt="Hreo Image"
          className=" object-contain hue-rotate-60"
          priority
        />
      </div>
    </section>
  );
}
