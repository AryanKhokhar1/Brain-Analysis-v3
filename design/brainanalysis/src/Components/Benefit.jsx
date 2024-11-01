import React from "react";
import { GoArrowUpRight } from "react-icons/go";
export function Benefit(){
    return(
        <>
        <div className="flex gap-8 ">
            <div className="ml-28 rounded-2xl bg-stone-800"> <h2 className="px text-white px-3 w-fit text-[3vw] opacity-80 font-medium">Benefits</h2></div>
            <div className="self-center opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse ullam numquam delectus,<br/> eum deleniti ipsum ipsa veritatis vel facilis quis. Deserunt ea eaque hic doloremque sed vel ex expedita.</div>
        </div>

        <div className="mx-28 my-14 rounded-2xl bg-stone-800 flex justify-evenly text-white px-2 py-16"> 
            <div className="px-10 w-1/3 border-r-2 opacity-80 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio vero maxime! Repudiandae ea unde blanditiis ipsa aut quia, aspernatur nulla, atque error voluptatibus consequuntur!
            <div className="text-green-400 flex">Learn more <GoArrowUpRight  className="self-center font-medium mx-1"/></div></div>
            <div className="px-7 w-1/3 border-l-2 border-r-2 opacity-80 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque, enim inventore, repellat delectus consectetur eaque asperiores veritatis illum velit totam esse explicabo, quisquam id.<div className="text-green-400 flex">Learn more <GoArrowUpRight  className="self-center font-medium mx-1"/></div></div>
            <div className="px-10 w-1/3 border-l-2 opacity-80 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ad saepe iste adipisci, odit rem repudiandae corporis sint error velit odio suscipit quidem eaque deleniti?<div className="text-green-400 flex">Learn more <GoArrowUpRight  className="self-center font-medium mx-1"/></div></div>
        </div>
        </>
    );
}