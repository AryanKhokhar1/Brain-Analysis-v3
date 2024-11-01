import React from "react";
import { Question } from "../Components/Question";
import { Navbar } from "../Components/Navbar";
import { Bottom } from "../Components/Bottom";

function Questionpage() {
    return (
        <body className="min-h-screen flex flex-col">
            <Navbar />
            <Question />
            <div className="fixed bottom-0 w-full">
                <Bottom />
            </div>
        </body>
    );
}

export default Questionpage;