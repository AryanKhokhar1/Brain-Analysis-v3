import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import founderimg  from "./img/founder.jpeg";
export function Founder() {
    return (
        <>
            <div className="pt-10 pl-28 flex gap-8">
                <h2 className="text-[3vw] bg-red-400 rounded-2xl px-3 w-fit opacity-80 font-medium">Founder</h2>
                <div className="self-center opacity-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corrupti pariatur dicta exercitationem non fugiat <br />expedita optio magni, ipsa esse? Temporibus vero ipsam asperiores deleniti.</div>
            </div>

            <div className="flex my-14 mx-28 grid grid-cols-[2fr_5fr] gap-8">
                <div className=" px-5 py-5 rounded-2xl bg-red-400 flex items-center flex-col">
                        {/* <img src={ founderimg } alt="founder" /> */}
                        <img className="h-48 w-48 rounded-full text-center opacity-90" src={ founderimg } alt="founder" />
                    <div className="socialmedia bg-stone-100 flex justify-evenly w-[80%] mt-5 py-2 rounded-2xl text-3xl opacity-80">
                        <div className="linkedin"><FaLinkedin /></div>
                        <div className="github"><FaGithub /></div>
                        <div className="instagram"><FaInstagramSquare /></div>
                        <div className="twiter"><FaSquareXTwitter /></div>
                        <div className="leetcode"><SiLeetcode /></div>
                    </div>
                </div>
                <div className=" px-12 py-8 rounded-2xl bg-red-400 text-xl">
                    <div className="opacity-80">
                        <div className="name"> <span className="font-semibold">Founder:</span> <span className="opacity-75">Aryan Khokhar</span></div>
                        <div><span className="font-semibold">Role:</span> <span className="opacity-75">Founder & Developer</span></div>
                        <div><span className="font-semibold">Technology Used:</span> <span className="opacity-75">React Js, Vite, Tailwind Css, Django, Django Rest FrameWork </span></div>
                        <div><span className="font-semibold">About:</span><span className="opacity-75">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit repellendus unde tempora quaerat distinctio neque eum, ex nihil error doloribus eos recusandae aliquid. Qui iure velit vitae corporis inventore maxime doloremque, dolore ab in quod enim tenetur fugit assumenda veniam eaque ducimus magnam voluptas adipisci. Quam totam corrupti itaque.</span></div>
                    </div>
                </div>
            </div>
        </>
    );
}