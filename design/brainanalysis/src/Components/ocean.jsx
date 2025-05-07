import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import Engineer from "./img/engineer.png";
import { Element } from "react-scroll";
export function Ocean() {
    const trait1 = [
        {
            name: "Openness",
            description:
                "Openness reflects your curiosity, creativity, and desire to experience new things. Are you open to change, imagination, and big ideas? Let's find out.",
        },
        {
            name: "Conscientiousness",
            description:
                "Conscientiousness reveals your self-discipline, organization, and reliability. Are you someone who plans, perseveres, and gets things done?",
        },
        {
            name: "Extraversion",
            description:
                "Extraversion defines your comfort in social situations, your energy levels, and your assertiveness. Are you outgoing and expressive or reflective and calm?",
        },

    ];
    const trait2 = [
        {
            name: "Agreeableness",
            description:
                "Agreeableness reflects kindness, empathy, and cooperation. Are you compassionate, helpful, and trusting in your relationships?",
        },
        {
            name: "Neuroticism",
            description:
                "Neuroticism shows how emotionally reactive you are. It reflects your vulnerability to stress, anxiety, and mood swings.",
        },
    ]


    return (
        <Element name="about" id="about">
            <div className="grid grid-cols-[1fr_5fr] pt-24">
                <div className=" flex justify-end pl-28"><div className=" bg-blue-400 w-fit flex justify-center align-middle rounded-2xl"><h1 className="text-[3vw] px-3 opacity-80 font-semibold">OCEAN</h1></div></div>
                <p className="self-center pl-10 opacity-75">The OCEAN model breaks human personality into five powerful dimensions. <br /> With BrainAnalysis, dive deep into your core traits and understand how they shape your decisions, behavior, and future.</p>
            </div>




            <div>
                <div className="flex flex-wrap justify-between px-28 pt-14 gap-5">
                    {trait1.map((item, index) => (
                        <>
                            <div key={index} className={`h-[15vw] w-[26vw] rounded-xl ${
                                // index === 0 ? "bg-blue-400" :
                                // index === 1 ? "bg-gray-300" :
                                // index === 2 ? "bg-red-400" :
                                "bg-gray-300"
                                }`}>
                                <div className="bg-white w-fit mx-4 my-5 rounded-lg"><h2 className=" font-normal text-3xl px-2 py-2 opacity-80">{item.name}</h2></div>

                                <div className="grid grid-cols-[3fr_2fr] h-1/2">

                                    <div className="h-1/2 px-4 opacity-70 ">
                                        {item.description}
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
                {trait2.map((item, index) => (
                    <>
                        <div key={index} className={`h-[15vw] w-[26vw] rounded-xl ${
                            // index === 0 ? "bg-blue-400" :
                            //     index === 1 ? "bg-red-400" :
                            "bg-gray-300"
                            }`}>





                            <div className="bg-white w-fit mx-4 my-5 rounded-lg"><h2 className=" font-normal text-3xl px-2 py-2 opacity-80">{item.name}</h2></div>

                            <div className="grid grid-cols-[3fr_2fr] h-1/2">
                                <div className="h-1/2 px-4 opacity-70 ">
                                    {item.description}
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