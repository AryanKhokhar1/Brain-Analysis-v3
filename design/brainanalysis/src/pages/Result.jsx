import React from "react";
import { Navbar } from "../Components/Navbar";
import { Bottom } from "../Components/Bottom";
import { Report } from "../Components/Report";
function Result() {
    return (
        <>
            <Navbar />
            <Report />
            <div className="">
                <Bottom />
            </div>
        </>
    );
}

export default Result;