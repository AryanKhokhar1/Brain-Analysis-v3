import React, {useRef} from "react";
import html2pdf from 'html2pdf.js';
import './report.css';
import Barchart from "./Barcharts";
import Facets from "./Facets";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineInsights } from "react-icons/md";
import { NavLink } from "react-router-dom";


const openness = {
    Fantasy: { name: 'Fantasy', score: 8 },
    Aesthetics: { name: 'Aesthetics', score: 7 },
    Feelings: { name: 'Feelings', score: 5 },
    Adventurousness: { name: 'Adventurousness', score: 6 },
    IntellectualCuriosity: { name: 'Intellectual curiosity', score: 4 },
    PsychologicalLiberalism: { name: 'Psychological liberalism', score: 4 },
};

export function Report() {


    const reportRef = useRef();

    const handleDownloadPdf = () => {
      const element = reportRef.current;
  
      const opt = {
        margin: 0.5,
        filename: 'NeuroPersona_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
  
      html2pdf().set(opt).from(element).save();
  
    };

    return (
        <>
            <div className="px-28 pb-14">
                <div className=" mb-20 bg-black text-white flex justify-center items-center text-[7vw] ">
                    <h1 className="ocean opacity-80 font-black tracking-[1em]">
                        <span className="O letter">O</span>
                        <span className="C letter">C</span>
                        <span className="E letter">E</span>
                        <span className="A letter">A</span>
                        <span className="N letter">N</span>

                    </h1>
                </div>
                <div className="flex gap-8 items-center">
                    <div>
                        <h2 className="bg-blue-500 px-2 text-[3vw] opacity-80 font-semibold text-white">Result</h2>
                    </div>
                    <div className="opacity-70 text-[1vw]">Your personality results reveal how you think, feel, and interact with others. The chart highlights your strengths across five key traits. <br />Use these insights to understand yourself better, enhance your personal growth, and align your skills with career paths or goals that match your unique personality profile.</div>
                </div>
                <div className="grid grid-cols-[3fr_3fr] py-14">
                    <Barchart />
                    <div className="py-5 px-20 opacity-80 flex flex-col">

                        {["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"].map((item, index) => (
                            <>
                                <div className="flex items-center pb-5">
                                    <div className={`h-3 w-3 bg-black ${index === 0 ? "bg-blue-500" :
                                        index === 1 ? "bg-green-500" :
                                            index === 2 ? "bg-red-500" :
                                                index === 3 ? "bg-stone-500" :
                                                    index === 4 ? "bg-purple-500" :
                                                        "text-black"
                                        }`}></div>&nbsp;&nbsp;
                                    <h2 className={`font-semibold text-2xl ${index === 0 ? "text-blue-500" :
                                        index === 1 ? "text-green-500" :
                                            index === 2 ? "text-red-500" :
                                                index === 3 ? "text-stone-500" :
                                                    index === 4 ? "text-purple-500" :
                                                        "text-black"
                                        }`}> {item}: &nbsp;</h2>
                                    <div className="opacity-80 text-[1vw] font-medium">
                                        {/* {score < 2 ? "Low":
                                        score >5 ? "High":
                                        "Medium"
                                        } */}
                                        High
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                </div>

                <div>
                    <div className="openness pt-8">
                        <div className="py-5"><h2 className="text-[2vw] bg-blue-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Openness</h2></div>
                        <div className="grid grid-cols-[5fr_2fr]">
                            <div className="opacity-70 text-[1vw] grid">Your Openness score reveals a strong imagination and appreciation for new experiences. You excel in fantasy and aesthetic appreciation, suggesting you are curious, creative, and drawn to exploring abstract ideas.

                                <h3 className="font-bold pt-3">
                                    Strengths:
                                </h3>
                                <ul>

                                    <li>
                                        🌟 Imaginative and creative thinker
                                    </li>
                                    <li>

                                        🎨 Strong appreciation for art, beauty, and novel ideas
                                    </li>
                                    <li>

                                        🔍 Curious and eager to explore new experiences
                                    </li>
                                </ul>
                                <h3 className="font-bold pt-3">

                                    Key Insight:
                                </h3>

                                You thrive in dynamic environments where creativity and innovation are valued
                                Ideal fields: Design, Writing, Entrepreneurship
                            </div>
                        </div>

                    </div>
                    <div className="Conscientiousness pt-8">
                        <div className="py-5"><h2 className="text-[2vw] bg-green-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Conscientiousness</h2></div>
                        <div className="grid grid-cols-[5fr_2fr]">
                            <div className="opacity-70 text-[1vw] grid">Your Conscientiousness score indicates you are highly organized and goal-driven. You show strong self-discipline, excel in deliberation, and carefully plan tasks before action.

                                <h3 className="font-bold pt-3">
                                    Strengths:
                                </h3>
                                <ul>

                                    <li>
                                         ✅ Reliable, organized, and thorough
                                    </li>
                                    <li>
                                        🗓️ Strong time management and goal setting abilities
                                    </li>
                                    <li>
                                        🧐 Pays attention to details and long-term planning
                                    </li>
                                </ul>
                                <h3 className="font-bold pt-3">

                                    Key Insight:
                                </h3>

                                You perform best in roles that require precision, planning, and persistence
                                Ideal fields: Project management, Finance, Research
                            </div>
                        </div>
                    </div>
                    <div className="Extraversion pt-8">
                        <div className="py-5"><h2 className="text-[2vw] bg-red-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Extraversion</h2></div>
                        <div className="grid grid-cols-[5fr_2fr]">
                            <div className="opacity-70 text-[1vw] grid">Your Extraversion score reflects sociability, assertiveness, and enthusiasm. You are energized by interaction and tend to take initiative in social settings.

                                <h3 className="font-bold pt-3">
                                    Strengths:
                                </h3>
                                <ul>

                                    <li>
                                        🎉 Outgoing, talkative, and energetic
                                    </li>
                                    <li>

                                        💬 Enjoys networking, collaboration, and public speaking
                                    </li>
                                    <li>

                                        🔥 Takes initiative and often leads group activities
                                    </li>
                                </ul>
                                <h3 className="font-bold pt-3">

                                    Key Insight:
                                </h3>

                                You excel in environments that reward communication and leadership
                                Ideal fields: Sales, Marketing, Community Management
                            </div>
                        </div>
                    </div>
                    <div className="Agreeableness pt-8">
                        <div className="py-5"><h2 className="text-[2vw] bg-stone-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Agreeableness</h2></div>

                        <div className="grid grid-cols-[5fr_2fr]">
                            <div className="opacity-70 text-[1vw] grid">Your Agreeableness score highlights your empathy, cooperation, and trust in others. You value harmony and often seek to support and uplift people around you.
                                <h3 className="font-bold pt-3">
                                    Strengths:
                                </h3>
                                <ul>

                                    <li>
                                        ❤️ Compassionate and empathetic listener
                                    </li>
                                    <li>

                                        🤝 Values teamwork, kindness, and collaboration


                                    </li>
                                    <li>

                                        🕊️ Strives to resolve conflicts and maintain harmony
                                    </li>
                                </ul>
                                <h3 className="font-bold pt-3">

                                    Key Insight:
                                </h3>

                                You thrive in people-centric fields where helping others is key
                                Ideal fields: Counseling, Teaching, Human Resources
                            </div>
                        </div>
                    </div>
                    <div className="Neuroticism pt-8">
                        <div className="py-5"><h2 className="text-[2vw] bg-purple-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Neuroticism</h2></div>

                        <div className="grid grid-cols-[5fr_2fr]">
                            <div className="opacity-70 text-[1vw] grid">Your Neuroticism score suggests you are in touch with your emotions, but may sometimes experience stress or worry. This emotional awareness can foster empathy and depth of understanding.

                                <h3 className="font-bold pt-3">
                                    Strengths:
                                </h3>
                                <ul>

                                    <li>
                                        🌊 Emotionally aware and sensitive to surroundings


                                    </li>
                                    <li>

                                        ✍️ Deep reflective and analytical abilities
                                    </li>
                                    <li>

                                        🫶 Can relate well to others’ emotions and challenges


                                    </li>
                                </ul>
                                <h3 className="font-bold pt-3">

                                    Key Insight:
                                </h3>

                                With stress management, your sensitivity becomes an asset
                                Ideal fields: Psychology, Art, Writing
                            </div>
                        </div>
                    </div>
                </div>
                <div className="savereport pt-14 ">
                    <button onClick={handleDownloadPdf()} className="flex items-center bg-green-600 text-white opacity-80 px-5 py-2 rounded-xl">Save as pdf&nbsp;&nbsp; <FaDownload /> </button>
                </div>
                <div className="toinsight py-14 flex justify-center">
                    <button className="flex items-center bg-blue-500 text-white opacity-80 px-10 py-3 rounded-xl"><NavLink to="/insights">
                        Get Insight&nbsp;&nbsp;
                    </NavLink>
                        <MdOutlineInsights className="text-2xl" /> </button>
                </div>
            </div>
        </>
    );
}