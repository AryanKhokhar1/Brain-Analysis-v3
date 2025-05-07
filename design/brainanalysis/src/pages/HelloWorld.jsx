import React, {useState, useEffect} from "react";
import axios from 'axios';

function HelloWorld(){
    const [message, setmessage] = useState("");

    useEffect(()=>{
        axios.get('http://127.0.0.1:8001/api/home/')
        .then( response => {
            setmessage(response.data.message)
        })
        .catch(error => {
            console.log("Can't Fetch message from Django")
        })
    }, []);
    
    return(
        <div>
            <h1>Hello, World!</h1>
            <p>{message}</p>
        </div>
    );
}
export default HelloWorld;