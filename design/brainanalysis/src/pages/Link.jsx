import React from "react";
import { Registeration } from "../Components/Registeration";
import { Login } from "../Components/Login";
import { Question } from "../Components/Question";
import { Navbar } from "../Components/Navbar";
import { Bottom } from "../Components/Bottom";
function Link(){
    return(
        <body className="min-h-screen flex flex-col">
            <Navbar/>
            <Question/>
            <Bottom className="self-end"/>
        </body>
    );
}

export default Link;