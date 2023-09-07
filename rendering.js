import React, {useState} from "react";
function Render(){
const [isLoggedIn,setIsLoggedIn]=useState(false);
const handlelogin=() => {
    setIsLoggedIn(!isLoggedIn);
};
return(
    <div>
        <h1>conditional rendering</h1>
        {isLoggedIn ?(
            <p>Welcome! You are Logged in</p>
        ) :(<p>Login to access</p>)}
        <button onClick={handlelogin}>
            {isLoggedIn ?"logout" : "login"}
        </button>
    </div>
);

}
export default Render;