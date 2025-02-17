import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
export function Bottom() {
    return (
        <>

            <div className="flex flex-col bg-black text-white mx-28 mt-24 rounded-t-3xl px-16 ">
                <div className="flex grid grid-cols-[2fr_5fr] py-10">
                    <div className="logo">
                        <h1 className="semibold text-3xl opacity-75">
                            <Link to="navbar" smooth={true} duration={1000}>BrainAnalysis</Link></h1>
                        <div className="socialmedia flex items-center gap-5  py-3">
                            <div className="instagram text-2xl opacity-80">
                                <NavLink to="https://www.instagram.com/chaudhary.gudduuu__/" target="blank">
                                <BsInstagram />
                                </NavLink>
                                </div>
                            <div className="github text-2xl opacity-80">
                                <NavLink to="https://github.com/AryanKhokhar1" target="blank">
                                <VscGithub />
                                </NavLink>
                                </div>
                            <div className="Linkedin text-3xl opacity-80">
                                <NavLink to="https://www.linkedin.com/in/aryan-khokhar/" target="blank">
                                <CiLinkedin />
                                </NavLink>
                                </div>
                            <div className="Twitter text-2xl opacity-80">
                                <NavLink to="https://x.com/aryan_khokhar07" target="blank">
                                <FaXTwitter />
                                </NavLink>
                                </div>

                        </div>
                    </div>
                    <div className="flex gap-7  w-full justify-end">
                        {["Result", "Methodology", "About", "Founder", "Register"].map((item, index) => (
                            
                            index === 0 ? (
                                <div key={index} className=" opacity-70 text-lg">
                                <NavLink to="/result">
                                {item}
                                </NavLink>
                                </div >
                            ) : index === 1 ? (
                                <div key={index} className=" opacity-70 text-lg">
                                <Link to="methodology"
                                smooth={true}
                                duration={700}>
                                {item}
                                </Link>
                                </div >
                            ) : index === 2 ? (
                                <div key={index} className=" opacity-70 text-lg">
                                <Link to="about"
                                smooth={true}
                                duration={600}>
                                {item}
                                </Link>
                                </div >
                            ) : index === 3 ? (
                                <div key={index} className=" opacity-70 text-lg">
                                <Link to="founder"
                                smooth={true}
                                duration={700}>
                                {item}
                                </Link>
                                </div >
                            ) : index === 4 ? (
                                <div key={index} className=" opacity-70 text-lg">
                                <NavLink to="/register">
                                {item}
                                </NavLink>
                                </div >
                            ) : (
                                <div key={index} className=" opacity-70 text-lg">
                                <Link to="/result">
                                {item}
                                </Link>
                                </div > 
                            )
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