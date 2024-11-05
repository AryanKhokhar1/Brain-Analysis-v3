import React from "react";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import human from "./img/human1.png";
import ai from "./img/ai2.png";
import engineer from "./img/engineer.png";

export function Methodology(){
    return(
        <>
        <div className="pt-16">
            <div className=" w-fit pl-28"><h2 style={{ backgroundColor: '#5D99C3' }}className="bg-blue-400 text-[3vw] font-semibold flex px-3 rounded-2xl "><span className="opacity-80">
                Working
                </span>
                <FaRegLightbulb className=" self-center "/></h2></div>
        </div>
        <div className="flex w-full grid  grid-cols-[1fr_2fr_1fr]  px-28 pt-14">
            <div><img src={human} alt="human" /></div>
            <div><img src={ai} alt="ai" /></div>
            <div className="self-center"><img src={engineer} alt="engineer" /></div>
        </div>
        </>
    );
}