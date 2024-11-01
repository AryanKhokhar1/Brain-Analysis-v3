import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

export function Bottom() {
    return (
        <>

            <div className="flex flex-col bg-black text-white mx-28 mt-24 rounded-t-3xl px-16 ">
                <div className="flex grid grid-cols-[2fr_5fr] py-10">
                    <div className="logo">
                        <h1 className="semibold text-3xl opacity-75">BrainAnalysis</h1>
                        <div className="socialmedia flex items-center gap-5  py-3">
                            <div className="instagram text-2xl opacity-80"><BsInstagram /></div>
                            <div className="github text-2xl opacity-80"><VscGithub /></div>
                            <div className="Linkedin text-3xl opacity-80"><CiLinkedin /></div>
                            <div className="Twitter text-2xl opacity-80"><FaXTwitter /></div>

                        </div>
                    </div>
                    <div className="flex gap-7  w-full justify-end">
                        {["Result", "Methodology", "About", "Founder", "Register"].map((item, index) => (
                            <div key={index} className=" opacity-70 text-lg">{item}</div >
                        ))}
                    </div>
                </div>
                    <hr className="border border-neutral-600" />
                <div className="flex justify-between py-2">
                    <div className="opacity-60">Copyright &copy; 2024 | BrainAnalysis. All rights reserved </div>
                </div>
            </div>
        </>
    );
}