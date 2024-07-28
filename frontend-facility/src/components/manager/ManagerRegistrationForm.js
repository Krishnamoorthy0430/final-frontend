import { useEffect, useRef, useState } from "react";
import ManagerServiceRegistration from "../../services/ManagerServiceRegistration";

const ManagerRegistrationForm = () => {
    const[id, setId]=useState();
    const[userName, setUsername]=useState();
    const[password, setPassword]=useState();
    const[name, setName]=useState();
    const[status, setStatus]=useState();
    const[phone, setPhone]=useState();
    const[email, setEmail]=useState();

    const classname = useRef();

    useEffect(()=>{
        classname.id="form-control";
        classname.userName="form-control";
        classname.password="form-control";
        classname.name="form-control";
        classname.status="form-control";
        classname.phone="form-control";
        classname.email="form-control";
    },[]);

    function fnCreate()
    {
        var manager = {"userName":"","password":"","name":"","role":"Manager","status":"","phone":"","email":""};
        manager.id=id;
        manager.userName=userName;
        manager.password=password;
        manager.name=name;
        manager.status=status;
        manager.phone=phone;
        manager.email=email;
        
        ManagerServiceRegistration.createManager(manager)
        .then((response)=>{
            console.log(response.data)
            window.location.reload(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    function fnUpdate()
    {
        var manager = {"id":"","userName":"","password":"","name":"","role":"Manager","status":"","phone":"","email":""};
        manager.id=id;
        manager.userName=userName;
        manager.password=password;
        manager.name=name;
        manager.status=status;
        manager.phone=phone;
        manager.email=email;

        ManagerServiceRegistration.updateManager(id)
        .then((response)=>{
            console.log(response.data)
            window.location.reload(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return <div>
        <h1>Manager Registration</h1>
        ID       : <input type="number" id="id" style={{ width: '300px' }} className={classname.id} onChange={(event)=>{setId(event.target.value)}} /><br/><br/>
        Username : <input type="text" id="userName" style={{ width: '300px' }} className={classname.userName} onChange={(event)=>{setUsername(event.target.value)}} /><br/><br/>
        Password : <input type="text" id="password" style={{ width: '300px' }} className={classname.password} onChange={(event)=>{setPassword(event.target.value)}} /><br/><br/>
        Name     : <input type="text" id="name" style={{ width: '300px' }} className={classname.name} onChange={(event)=>{setName(event.target.value)}} /><br/><br/>
        Status   : <input type="text" id="status" style={{ width: '300px' }} className={classname.status} onChange={(event)=>{setStatus(event.target.value)}} /><br/><br/>
        Phone    : <input type="number" id="phone" style={{ width: '300px' }} className={classname.phone} onChange={(event)=>{setPhone(event.target.value)}} /><br/><br/>
        Email    : <input type="text" id="email" style={{ width: '300px' }} className={classname.email} onChange={(event)=>{setEmail(event.target.value)}} /><br/><br/>
        <div>
            <input type="button" className="btn btn-primary" value="Create Manager" onClick={fnCreate} />&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" className="btn btn-secondary" value="Update Manager" onClick={fnUpdate} />
        </div>
    </div>
}
export default ManagerRegistrationForm;