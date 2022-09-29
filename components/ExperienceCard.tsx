import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col required:-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600] xl:w-[900px] snap-center bg-[#252c41] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opactity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:  xl:w-[200px] xl:h-[200px]
   object-cover object-center"
        src="https://zupimages.net/up/22/39/uwpu.jpg"
        alt="Netflix"
      />

      <div className=" px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO OF PAPAFAM</h4>
        <p className="font-bold text-5xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://zupimages.net/up/22/39/d7mu.png"
            alt="skill-logo"
          ></img>

          <img
            className="h-10 w-10 rounded-full"
            src="https://zupimages.net/up/22/39/d7mu.png"
            alt="skill-logo"
          ></img>

          <img
            className="h-10 w-10 rounded-full"
            src="https://zupimages.net/up/22/39/d7mu.png"
            alt="skill-logo"
          ></img>
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... -ended..</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>sumary pointssumary  </li>
          <li>sumary pointssumary  </li>
          <li>sumary pointssumary  </li>
          <li>sumary pointssumary </li>
          <li>sumary pointssumary  </li>
        </ul>
      </div>
    </article>
  );
}
