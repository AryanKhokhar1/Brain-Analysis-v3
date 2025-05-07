import React from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom";
export function Registeration() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">

                <div className="bg-transparent border border-black w-fit h-fit rounded-2xl px-32">
                    <div className="logo w-full text-center text-3xl font-semibold py-10 opacity-85">BrainAnalysis</div>
                    <div>
                        <h2 className="text-2xl font-semibold opacity-80">Registeration</h2>
                        <form action="" method="post">
                            <label htmlFor="email" className="flex flex-col pt-6 text-lg opacity-80">Full Name:
                                <input className="px-2 py-1 border bg-stone-50 border-stone-800 rounded-lg  mt-2 placeholder:text-stone-500 placeholder:font-light placeholder:text-sm" type="text" placeholder="Full Name" id="name" name="name" />
                            </label>
                            <label htmlFor="email" className="flex flex-col pt-6 text-lg opacity-80">Email:
                                <input className="px-2 py-1 border bg-stone-50 border-stone-800 rounded-lg  mt-2 placeholder:text-stone-500 placeholder:font-light placeholder:text-sm" type="email" placeholder="example@gmail.com" id="email" name="email" />
                            </label>
                            <label htmlFor="password" className="flex flex-col text-lg pt-6 
                            opacity-80">Password:
                                <input className="px-2 py-1 border bg-stone-50 border-stone-800 rounded-lg mt-2 placeholder:text-stone-500 placeholder:font-light placeholder:text-sm" placeholder="Password" type="password" name="" id="" />
                            </label>
                            <label htmlFor="password" className="flex flex-col text-lg pt-6 
                            opacity-80">Confirm Password:
                                <input className="px-2 py-1 border bg-stone-50 border-stone-800 rounded-lg mt-2 placeholder:text-stone-500 placeholder:font-light placeholder:text-sm" placeholder="Password" type="password" name="" id="" />
                            </label>
                            <div className="w-full flex justify-center py-5 opacity-80"><button className="w-full bg-black text-center text-white rounded-2xl py-2 " type="submit">Sign up</button></div>
                        </form>
                        <div className="flex justify-center opacity-75 text-sm">or continue with</div>
                        <div className="flex justify-between py-8">
                            <div className="px-4 text-3xl opacity-80"><FaGoogle /></div>
                            <div className="px-4 text-3xl opacity-80"><FaGithub /></div>
                            <div className="px-4 text-3xl opacity-80"><FaFacebook /></div>
                        </div>
                        <div className="flex justify-center opacity-75 text-sm pb-10">Already have an account? <Link to="/login" className="font-bold">Login</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}