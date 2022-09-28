import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const { text, count } = useTypewriter({
    words: ["Slt, Its Mawco", "vive-haiti.tsx", "hackingislife/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover justify-center"
        src="https://zupimages.net/up/22/39/fkyk.png"
        alt="img"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb=2 tracking-[15px]">
          {" "}
          Etudiant en informatique
        </h2>
      </div>
      <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorStyle="!509" />
      </h1>
      <div>
        <div className="pt5">
          <Link href="#about">
            <button className="heroButton">A propos</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton"> Experience</button>
          </Link>
          <Link href="Compétences">
            <button className="heroButton">Compétences</button>
          </Link>
          <Link href="Projets">
            <button className="heroButton">Projets</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
