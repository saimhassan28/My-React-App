import React, { useState } from "react";

function Subscribe(){
    const[email,setEmail]=useState("");
    const [message, setMessage] = useState("");

    const emailValidation=()=>{
        const regEx= /[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g
if (regEx.test(email)){
    setMessage("Email Valid");
}else if (!regEx.test(email)&& email!=""){
setMessage("Email Invalid");
}else{
    setMessage("");
}
    };




    const handleOnChange=(e)=>{
setEmail(e.target.value);
    };
    return(
        <div id="subscribe">
            <h3>Subscribe</h3>
            <div className="subscribe-input">
                <input type='email' placeholder="example@email.com" value={email} onChange={handleOnChange}/>
                <a href="#" onClick={emailValidation}>Continue</a>
            </div>
            <div className="message">
                {message}
            </div>

        </div>
    )
}

export default Subscribe;   