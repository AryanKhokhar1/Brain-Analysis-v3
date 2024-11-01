import React from "react"
import { Navbar } from "../Components/Navbar";
import { Landingpage } from "../Components/LandingPage";
import {Ocean} from "../Components/ocean";
import { Methodology } from "../Components/Methodology";
import { Benefit } from "../Components/Benefit";
import { Founder } from "../Components/Founder";
import {Feedback} from "../Components/Feedback";
import { Bottom } from "../Components/Bottom";
function Home() {
  return (
    <body>
      <header>
        <Navbar/>
        <Landingpage/>
      </header>
      <hr />
      <main>
        <Ocean/>
        <Methodology/>
        <Benefit/>
        <Founder/>
      </main>
      <footer>
        <Feedback/>
        <Bottom/>
      </footer>
    </body>
  );
}

export default Home;
