import React from "react";
import Facets from "./Facets";
import ReactDOM from "react-dom";

const positive = [
    "Optimistic and encouraging",
    "Empathetic listener",
    "Quick problem-solver",
    "Always dependable",
    "Highly creative thinker",
    "Energetic and proactive",
    "Patient under stress",
    "Strong team player",
]

const negative = [
    "Easily distracted",
    "Procrastinates often",
    "Tends to overthink",
    "Impatient with delays",
    "Frequently self - critical",
    "Resistant to change",
    "Can be overly blunt",
]

const fullgraph = {
    Fantasy: { name: 'Fantasy', score: 8 },
    Aesthetics: { name: 'Aesthetics', score: 7 },
    Feelings: { name: 'Feelings', score: 5 },
    Adventurousness: { name: 'Adventurousness', score: 6 },
    IntellectualCuriosity: { name: 'Intellectual curiosity', score: 4 },
    PsychologicalLiberalism: { name: 'Psychological liberalism', score: 4 },
    AFantasy: { name: 'Fantasy', score: -3 },
    AAesthetics: { name: 'Aesthetics', score: -7 },
    AFeelings: { name: 'Feelings', score: -5 },
    AAdventurousness: { name: 'Adventurousness', score: -6 },
    AIntellectualCuriosity: { name: 'Intellectual curiosity', score: -4 },
    APsychologicalLiberalism: { name: 'Psychological liberalism', score: -4 },
}


export function Insight() {


    return (
        <>
            <div className="px-28">

                <div>

                    <div className="flex gap-8 py-14 items-center">
                        <div className="opacity-80">
                            <h2 className="text-[3vw] px-3 w-fit bg-blue-500 text-white font-semibold ">Strenth & Weakness: </h2></div>
                        <div className="opacity-70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dolore quibusdam nostrum! Illum tempora ex exercitationem <br></br> facere odio laudantium dolores ad repellendus aliquam delectus quisquam quaerat, architecto excepturi rem animi.</div>
                    </div>
                    <Facets openness={fullgraph} />
                    <div className="flex w-full mt-10">
                        <div className="w-1/2 border border-black px-10 py-5">
                            <h3 className="bg-green-500 w-fit px-2 py-2 text-xl font-semibold opacity-80 text-">Strength</h3>

                            <ul className="py-6 opacity-75">
                                {positive.map((item, index) =>(
                                    <li key={index}> {item} </li>
                                ))}
                            </ul>


                        </div>
                        <div className="w-1/2 border border-black px-10 py-5">
                            <h3 className="bg-red-500 w-fit px-2 py-2 text-xl font-semibold opacity-80">Weakness</h3>
                            <ul className="py-6 opacity-75" >
                                {negative.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>







            </div>
        </>
    );
}