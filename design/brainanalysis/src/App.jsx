import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// import Link from "./pages/Link";
import Home from "./pages/Home";
import Questionpage from "./pages/Questionpage";
import Result from "./pages/Result";
import Register from "./pages/Register";
import Insights from "./pages/Insights";

function App() {
    return (
        <Router>
            <Routes>
                <Route index exact Component={()=> <Home/>}/>
                <Route path="question/" exact Component={()=> <Questionpage />}/>
                <Route path="result/" exact Component={()=> <Result />}/>
                <Route path="register/" exact Component={()=> <Register />}/>
                {/* <Route path="check/" exact Component={()=> <Check />}/> */}
                <Route path="insights/" exact Component={()=> <Insights />}/>


            </Routes>
        </Router>
    );
}

export default App;