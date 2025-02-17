import React from "react";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import human from "./img/human1.png";
import ai from "./img/ai2.png";
import engineer from "./img/engineer.png";
import { Element } from "react-scroll";
export function Methodology(){
    return(
        <Element name="methodology">
        <div className="pt-16">
            <div className=" w-fit pl-28"><h2 style={{ backgroundColor: '#5D99C3' }}className="bg-blue-400 text-[3vw] font-semibold flex px-3 rounded-2xl "><span className="opacity-80">
                Working
                </span>
                </h2></div>
        </div>
        <div className=" w-full grid  grid-cols-[1fr_2fr_1fr]  px-28 pt-14">
            <div className="flex"><img src={human} alt="human" className="h-fit"/></div>
            <div className="flex justify-center"><img src={ai} alt="ai"  /></div>
            <div className="flex self-center"><img src={engineer} alt="engineer" className="h-fit" /></div>
        </div>
        </Element>
    );
}