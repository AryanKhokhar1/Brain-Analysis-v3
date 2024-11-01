import React from "react"

export function Navbar() {
    return (
        <>
            <div className="flex w-full items-center px-28 py-8 justify-between">
                <div className="logo">
                    <h1 className=" text-2xl opacity-75">BrainAnalysis</h1>
                </div>
                <div className="link flex gap-16">
                    {["Result", "Methodology", "About", "Founder", "Register"].map((item, index) => (
                        index === 4 ? (
                            <a key={index} className={`text-lg capitalize opacity-80 font-regular ml-10`}><button className="border border-opacity-80 border-black py-1.5 px-6 rounded-md hover:text-white hover:bg-black">{item}</button></a>
                        ) : (
                            <a key={index} className={`text-lg capitalize opacity-80  font-regular py-2`}>{item}</a>
                        )
                    ))}
                </div>
            </div>
            {/* <hr class="bg-gray-200 border-1 dark:bg-gray-700 opacity-80" /> */}
            <hr />
        </>
    );
}