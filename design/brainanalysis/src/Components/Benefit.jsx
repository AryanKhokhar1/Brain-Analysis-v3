import React from "react";
import { GoArrowUpRight } from "react-icons/go";
export function Benefit(){
    return(
        <>
        <div className="flex gap-8 ">
            <div className="ml-28 rounded-2xl bg-stone-800"> <h2 className="px text-white px-3 w-fit text-[3vw] opacity-80 font-medium">Benefits</h2></div>
            <div className="self-center opacity-75">Discover your personality strengths and growth areas. Learn how your unique mindset influences your decisions and daily behavior.</div>
        </div>

        <div className="mx-28 my-14 rounded-2xl bg-stone-800 flex justify-evenly text-white px-2 py-16"> 
            <div className="px-10 w-1/3 border-r-2 opacity-80 text-xl">Get accurate insight into your personality. We use advanced psychological models to help you understand how you think, feel, and act.
            <div className="text-green-400 flex">Learn more <GoArrowUpRight  className="self-center font-medium mx-1"/></div></div>
            <div className="px-7 w-1/3 border-l-2 border-r-2 opacity-80 text-xl">Identify careers and domains where your personality can thrive. Personalized suggestions guide you toward success that fits who you are.<div className="text-green-400 flex">Learn more <GoArrowUpRight  className="self-center font-medium mx-1"/></div></div>
            <div className="px-10 w-1/3 border-l-2 opacity-80 text-xl">Learn how to improve your communication, mindset, and confidence. Get custom advice based on your traits to build a better version of you.<div className="text-green-400 flex">Learn more <GoArrowUpRight  className="self-center font-medium mx-1"/></div></div>
        </div>
        </>
    );
}