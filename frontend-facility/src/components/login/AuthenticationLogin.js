import { useEffect, useRef, useState } from "react";
import UserLoginService from "../../services/UserLoginService";

const AuthenticationLogin = () => {
    const[username, setUsername]=useState();
    const[password, setPassword]=useState();

    const classname = useRef();

    useEffect(()=>{
        classname.userName="form-control";
        classname.password="form-control";
    },[]);

    function fnLogin()
    {
        var authenticationRequest = {"username":"","password":""};
        authenticationRequest.username=username;
        authenticationRequest.password=password;

        UserLoginService.fnLogin(authenticationRequest)
        .then((response)=>{
            console.log(response.data)
            window.location.reload(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return <div>
        Username : <input type="text" id="userName" style={{ width: '300px' }} className={classname.username} onChange={(event)=>{setUsername(event.target.value)}} /><br/><br/>
        Password : <input type="text" id="password" style={{ width: '300px' }} className={classname.password} onChange={(event)=>{setPassword(event.target.value)}} /><br/><br/>
        <div>
        <input type="button" className="btn btn-primary" value="Login" onClick={fnLogin} />
        </div>
    </div>
}