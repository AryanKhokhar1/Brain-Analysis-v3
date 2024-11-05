import React from "react";
import image1 from "./img/newfeedbackdesign.png";

export function Feedback(){
    return(
        <>
            <div className="pl-28 flex gap-8 py-14">
                <h2 className="text-[3vw] font-medium bg-stone-800 w-fit px-3  rounded-2xl opacity-80" style={{background: "#f2f2f3"}}>Contact Us</h2>
                <div className="opacity-75 self-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatum dicta amet quaerat temporibus,<br/> consectetur illo quasi quo sequi expedita excepturi magni inventore asperiores laudantium.</div>
            </div>

            <div className="grid grid-cols-[3fr_2fr] mx-28  rounded-3xl pl-24 py-3 " style={{background: "#f2f2f3"}}>
                    <form action="" method="post">
                        <label htmlFor="name" className="flex flex-col text-xl pt-10 opacity-80">Name* 
                            <input className=" border border-stone-700 w-[60%] rounded-lg py-2 mt-2" type="text" name="name" id="name" />
                        </label>
                        <label htmlFor="email" className="flex flex-col text-xl pt-10 opacity-80">Email*
                            <input className=" border border-stone-700 w-[60%] rounded-lg py-2 mt-2" type="email" name="email" id="email" />
                        </label>
                        <label htmlFor="message" className="flex flex-col text-xl pt-10 opacity-80">Message*
                            {/* <input className=" border border-stone-700 w-[60%] rounded-lg py-2 mt-2 h-48" type="text" name="message" id="message" /> */}
                            <textarea className=" border border-stone-700 w-[60%] rounded-lg py-2 mt-2 h-48"></textarea>
                        </label>
                        <button type="submit" className="w-[60%] bg-black text-white rounded-2xl py-4 mt-10 mb-20">Send Message</button>
                    </form>
                <div className="flex justify-end h-full w-full pr-10">
                    <img src={image1} alt="img" className="h-full" />
                </div>
            </div>
        </>
    );
}