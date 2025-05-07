import React from "react";
import { NavLink } from "react-router-dom";
export function Landingpage() {
    return (
        <>
            <div className="mainBox grid grid-cols-2 w-full">
                <div className="box1  h-full">
                    <div className="tagline pl-28 pt-36 text-[7vw] tracking-tighter leading-[6vw] font-bold opacity-85">
                        <div>
                            <h2>EXPLORE</h2>
                        </div>
                        <div className="flex">
                            <div className="h-28 w-32 bg-red-600"></div>
                            <h2>EVALUATE</h2>
                        </div>
                        <div>
                            <h2>EVOLVE</h2>
                        </div>
                    </div>
                    <p className="pl-28 pt-7 py-5 pr-10 opacity-75 ">You are more than your habits. Explore your personality, evaluate your potential, and evolve with intention. Let BrainAnalysis reveal the roadmap to your personal and professional growth</p>
                    <button className="border ml-64 my-4 text-white bg-black rounded-xl py-3 px-14 hover:text-black hover:bg-transparent hover:border-black">
                        <NavLink to="/question">
                            Take Test
                            </NavLink> 
                            </button>
                </div>
                <div className="box2  h-full"></div>
            </div>
            {/* <hr /> */}
            <div className="relative overflow-hidden">
                <div className="marquee-content flex">

                {["Imagination", "Artistic Interests", "Emotionality", "Adventurousness", "Intellect", "Liberalism", "Self-Efficacy", "Orderliness", "Dutifulness", "Achievement-Striving", "Self-Discipline", "Cautiousness", "Friendliness", "Gregariousness", "Assertiveness", "Activity Level", "Excitement-Seeking", "Cheerfulness",  "Trust", "Morality", "Altruism, Cooperation", "Modesty", "Sympathy", "Anxiety", "Anger", "Depression", "Self-Consciousness", "Immoderation", "Vulnerability"].map((item,index) =>(
                    <h2 key={index} className={`text-3xl font-bold opacity-65 px-16 py-14 text-nowrap `}
                    style={{
                        fontFamily: [
                            "Arial, sans-serif",
                            "Courier New, monospace",
                            "Georgia, serif",
                            "Comic Sans MS, cursive",
                            "Impact, sans-serif",
                            "Times New Roman, serif",
                            "Verdana, sans-serif",
                            "Trebuchet MS, sans-serif",
                            "Lucida Console, monospace",
                            "Palatino Linotype, serif"
                        ][index % 10] }}
                    >{item}</h2>
                ))}
                </div>
            </div>
        </>
    );
}