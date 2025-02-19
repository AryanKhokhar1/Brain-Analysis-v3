import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import Engineer from "./img/engineer.png";
import { Element } from "react-scroll";
export function Ocean() {


    return (
        <Element name="about">
            <div className="grid grid-cols-[1fr_5fr] pt-24">
                <div className=" flex justify-end pl-28"><div className=" bg-blue-400 w-fit flex justify-center align-middle rounded-2xl"><h1 className="text-[3vw] px-3 opacity-80 font-semibold">OCEAN</h1></div></div>
                <p className="self-center pl-10 opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta unde nesciunt id harum accusantium nisi<br></br> provident consequatur. Cupiditate hic rerum quibusdam distinctio nostrum nobis deserunt,</p>
            </div>




            <div>
                <div className="flex flex-wrap justify-between px-28 pt-14 gap-5">
                    {["Openness", "Conscientiousness", "Extraversion"].map((item, index) => (
                        <>
                            <div key={index} className={`h-[15vw] w-[26vw] rounded-xl ${
                                    // index === 0 ? "bg-blue-400" :
                                    // index === 1 ? "bg-gray-300" :
                                    // index === 2 ? "bg-red-400" :
                                    "bg-gray-300"
                                }`}>
                                <div className="bg-white w-fit mx-4 my-5 rounded-lg"><h2 className=" font-normal text-3xl px-2 py-2 opacity-80">{item}</h2></div>

                                <div className="grid grid-cols-[3fr_2fr] h-1/2">
                                    <div className="h-1/2 px-4 opacity-70 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet, id eveniet assumenda provident ipsa.
                                    </div>
                                    <div className="h-4/5 flex justify-center">
                                        <img src={Engineer} alt="Engineer" className="h-full" />
                                    </div>
                                </div>

                                <div className="flex items-end ">
                                    <div className="flex items-end text-xl opacity-80">
                                        <FaCircleArrowUp className="text-2xl ml-4 rotate-45 mr-1" /> Learn more</div>
                                    <div></div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>





            <div className="flex flex-wrap justify-center gap-24 py-10">
                {["Agreeableness", "Neuroticism"].map((item, index) => (
                    <>
                        <div key={index} className={`h-[15vw] w-[26vw] rounded-xl ${
                            // index === 0 ? "bg-blue-400" :
                            //     index === 1 ? "bg-red-400" :
                                    "bg-gray-300"
                            }`}>





                                <div className="bg-white w-fit mx-4 my-5 rounded-lg"><h2 className=" font-normal text-3xl px-2 py-2 opacity-80">{item}</h2></div>
                                
                                <div className="grid grid-cols-[3fr_2fr] h-1/2">
                                    <div className="h-1/2 px-4 opacity-70 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet, id eveniet assumenda provident ipsa.
                                    </div>
                                    <div className="h-4/5 flex justify-center">
                                        <img src={Engineer} alt="Engineer" className="h-full" />
                                    </div>
                                </div>

                                <div className="flex justify-between items-end h-fit">
                                    <div className="flex items-end text-xl opacity-80">
                                        <FaCircleArrowUp className="text-2xl ml-4 rotate-45 mr-1" /> Learn more</div>
                                    <div></div>
                                </div>
                                </div>

                    </>
                ))}
            </div>

        </Element>
    );
}