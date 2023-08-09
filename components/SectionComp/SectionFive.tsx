import Image from "next/image";
import secfive from "@/public/SectionFiveImg/secfive.png";
import secfive2 from "@/public/SectionFiveImg/secfive2.png";
import secfive3 from "@/public/SectionFiveImg/secfive3.png";

const CardData = [
  {
    imgurl: secfive,
    title: "Sunday Esanola",
    subtitle: "Physics Teacher",
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        beatae.
      </p>
    ),
  },
  {
    imgurl: secfive2,
    title: "Olalekan Esanola",
    subtitle: "English Teacher",
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        beatae.
      </p>
    ),
  },
  {
    imgurl: secfive3,
    title: "Nike Esanola",
    subtitle: "Math Teacher",
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        beatae.
      </p>
    ),
  },
];

type CardProps = {
  imgurl: any;
  title: any;
  subtitle: any;
  description: any;
};

function Card({ imgurl, title, subtitle, description }: CardProps) {
  return (
    <div className="flex flex-col rounded-md w-[250px] h-fit mb-10 bg-yellow-50 border-b-orange-500 border-b-[4px]  border-[1px] border-slate-400  justify-center items-center aspect-square">
      <div className="aspect-square w-[200px] relative mt-4">
        <Image
          src={imgurl}
          alt="section three image"
          className="object-contain"
          fill
        />
      </div>
      <div className=" relative flex flex-col h-fit gap-1 text-center px-5 mt-2">
        <div className="font-bold text-base">{title}</div>
        <div className="text-sm line-clamp-3">{subtitle}</div>
      </div>
      <div className=" relative flex flex-col h-fit gap-2 text-center mt-5 mb-5 ">
        <div className="text-sm line-clamp-3">{description}</div>
      </div>
    </div>
  );
}

export default function SectionFive() {
  return (
    <section className=" main-container relative h-full mt-[150px] mb-[20px]">
      <div className="flex flex-col">
        <div className="text-3xl text-center font-bold text-black mt-5">
          Our Teacher
        </div>
        <div className="flex justify-between gap-2 items-start  mt-20">
          {CardData.map((card, index) => (
            <div key={index} className="">
              <Card
                description={card.description}
                imgurl={card.imgurl}
                title={card.title}
                subtitle={card.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
