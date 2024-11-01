import React from "react";

export function Question() {
    return (
        <>
            <div className="mainbox w-full flex justify-center py-6">

                <div className="flex flex-col justify-center border border-black px-20 py-10 w-[50%] rounded-xl">
                    <div className="text-center py-5 text-2xl font-semibold opacity-80 text-wrap">Do you like to smoke? </div>
                    <div className="Question text-sm  flex justify-end  opacity-40 py-2">
                        1/120
                    </div>
                    <form className="text-base" action="" method="post">
                        <label className="flex text-lg opacity-80" htmlFor="Stonglydisagree">
                        <input className="rounded-full " type="radio" name="answer" value={1} id="sd" />
                        <span className="pl-2">Strongly Disagree</span>
                        </label>
                        <label className="flex text-lg opacity-80" htmlFor="Stonglydisagree">
                        <input type="radio" name="answer" value={2} id="d" />
                        <span className="pl-2">Disagree</span>
                        </label>
                        
                        <label className="flex text-lg opacity-80" htmlFor="Stonglydisagree">
                        <input type="radio" name="answer" value={3} id="n" />
                        <span className="pl-2">Neutral</span>
                        </label>
                        
                        <label className="flex text-lg opacity-80" htmlFor="Stonglydisagree">
                        <input type="radio" name="answer" value={4} id="a" /> 
                        <span className="pl-2">Agree</span>
                        </label>
                        
                        <label className="flex text-lg opacity-80" htmlFor="Stonglydisagree">
                        <input type="radio" name="answer" value={5} id="sa" />
                         <span className="pl-2">Strongly Agree</span>
                        </label>
                        <div className="allbutton flex justify-between items-center py-7">
                        <button className="bg-black rounded-lg px-2 py-1 text-white opacity-70">Back</button>
                        <button className="bg-green-700 mx-auto rounded-lg px-2 py-1 text-white opacity-70" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}