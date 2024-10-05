"use client";

import Nav from "@/app/components/Nav";
import Image from "next/image";

import { useInView } from "framer-motion";
import { useRef } from "react";

import p1 from "./photos/p1.jpg";
import p2 from "./photos/p2.jpg";
import p3 from "./photos/p3.jpg";
import p4 from "./photos/p4.jpg";
import p5 from "./photos/p5.jpg";
import p6 from "./photos/p6.jpg";
import p7 from "./photos/p7.jpg";
import p8 from "./photos/p8.jpg";
import p9 from "./photos/p9.jpg";
import p10 from "./photos/p10.jpg";
import p11 from "./photos/p11.jpg";
import p12 from "./photos/p12.jpg";
import p13 from "./photos/p13.jpg";
import p14 from "./photos/p14.jpg";
import p15 from "./photos/p15.jpg";

export default function Page() {
  const images = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
  ];

  const refs = images.map(() => useRef(null));
  const inViews = refs.map((ref) => useInView(ref));

  return (
    <div>
      <Nav />
      <div className="flex justify-center">
        <div className="w-[1200px] mt-[100px]">
          <h1 className="font-bold text-3xl mb-3">Catologue</h1>
          <p className="mb-[50px] text-lg">
            See our expansive catalogue of memories with Jeremiah.
          </p>
          <div className="flex gap-5 mb-[200px]">
            
            <div className="flex flex-col gap-5">
              {images.slice(0, 6).map((img, index) => (
                <div
                  key={index}
                  ref={refs[index]}
                  style={{
                    transition: "all 2s ease-in-out",
                    opacity: inViews[index] ? 1 : 0,
                  }}
                >
                  <Image src={img} alt="Jeremiah" className="w-[500px]" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {images.slice(6).map((img, index) => (
                <div
                  key={index + 6}
                  ref={refs[index + 6]}
                  style={{
                    transition: "all 2s ease-in-out",
                    opacity: inViews[index + 6] ? 1 : 0,
                  }}
                >
                  <Image src={img} alt="Jeremiah" className="w-[500px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
