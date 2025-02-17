import React from "react"
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import {Element} from "react-scroll";
export function Navbar() {
    return (
        <Element name="navbar">
            <div className="flex w-full items-center px-28 py-8 justify-between">
                <div className="logo">
                    <h1 className=" text-2xl opacity-75">
                        <NavLink to="/">
                            BrainAnalysis
                            </NavLink>
                            </h1>
                </div>
                <div className="link flex gap-16">
                    {["Result", "Methodology", "About", "Founder", "Register"].map((item, index) => (
                        index === 4 ? (
                            <NavLink to="/login" key={index} className={`text-lg capitalize opacity-80 font-regular ml-10`}><button className="border border-opacity-80 border-black py-1.5 px-6 rounded-md hover:text-white hover:bg-black">{item}</button></NavLink>
                        ) : index === 0 ?(
                            <NavLink to="/result" key={index} className={`text-lg capitalize opacity-80  font-regular py-2`}>{item}</NavLink>
                        ) : index === 1 ?(
                            <Link to="methodology"
                             key={index} 
                            smooth ={true}
                            duration={500}
                            className={`text-lg capitalize opacity-80  font-regular py-2`}>{item}</Link>
                        ) : index === 2 ? (
                            <Link to="about"
                            key={index}
                            smooth={true}
                            duration={500}
                             className={`text-lg capitalize opacity-80  font-regular py-2`}>{item}</Link>
                        ) : index === 3 ? (
                            <Link to="founder" 
                            key={index}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer text-lg capitalize opacity-80  font-regular py-2`}>{item}</Link>
                        ) : (
                            <a key={index} className={`text-lg capitalize opacity-80  font-regular py-2`}>{item}</a>
                        )
                    ))}
                </div>
            </div>
            {/* <hr class="bg-gray-200 border-1 dark:bg-gray-700 opacity-80" /> */}
            <hr />
        </Element>
    );
}