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
       src="https://zupimages.net/up/22/39/fkyk.png" alt="img" />
       <div>
<h2 className="text-sm uppercase text-gray-500 pb=2 tracking-[15px]"> Etudiant en informatique</h2>
       </div>
      <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorStyle="#F7AB0A" />
      </h1>
      <div>
    <button className="heroButton">A propos</button>
    <button className="heroButton"> Experience</button> 
    <button className="heroButton">Compétences</button>
    <button className="heroButton">Projets</button>
    </div>
    </div>
    
    
  );
}
