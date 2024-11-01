import React from "react";
import {Navbar} from "../Components/Navbar";
import {Bottom} from "../Components/Bottom";
import {Insight} from "../Components/Insight";

function Insights(){
    return(
        <>
            <Navbar />
            <Insight/>
            <Bottom />
        </>
    );
}

export default Insights;