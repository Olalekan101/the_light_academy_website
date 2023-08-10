import React, { ReactNode } from "react";
import { useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type sectionwrapper = {
  children: React.ReactNode;
  className: string;
};

export default function SectionWarpper({
  children,
  className,
}: sectionwrapper) {
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
    <section ref={secRef} className={`${className}`}>
      {children}
    </section>
  );
}
