import { useEffect, useRef, useState } from "react";
import FacilityService from '../../services/FacilityService';

const FacilityForm = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [facilityData, setFacilityData] = useState({});

    const classname = useRef();

    useEffect (()=> {
        classname.id="form-control";
        classname.name="form-control";
        classname.status="form-control";
        classname.description="form-control";
        classname.picture="form-control";
    },[]);

    function fnCreate()
    {
        var facility = {"name":"","status":"","description":"","picture":""};
        facility.name=name;
        facility.status=status;
        facility.description=description;
        facility.picture=picture;

        FacilityService.fnCreateFacility(facility)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const fnUpdate = () => {
        const updatedFacility = {};

        if (name) updatedFacility.name = name;
        if (status) updatedFacility.status = status;
        if (description) updatedFacility.description = description;
        if (picture) updatedFacility.picture = picture;

        FacilityService.fnUpdateFacility(id, updatedFacility)
            .then((response) => {
                console.log('Facility updated:', response.data);
            })
            .catch((error) => {
                console.error('Error updating facility:', error);
            });
    };

    const loadFacilityData = () => {
        FacilityService.fnGetFacilityById(id)
            .then(response => {
                const facility = response.data;
                setFacilityData(facility);
                setName(facility.name);
                setStatus(facility.status);
                setDescription(facility.description);
                setPicture(facility.picture);
            })
            .catch(error => {
                console.error('Error loading facility data:', error);
            });
    };

    function fnDelete()
    {
        FacilityService.fnDeleteFacility(id)
        .then((response)=>{
            console.log("response data delete is running");
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return <div>
        <h1>Facility Creation</h1>
        ID : <input type="number" id="id" style={{ width: '300px' }} className={classname.id} onChange={(event)=>{setId(event.target.value)}} /><br/><br/>
        <button onClick={loadFacilityData}>Load Facility Data</button> <br /><br /><br />
        Name     : <input type="text" id="name" style={{ width: '300px' }} className={classname.name} value={name} onChange={(event)=>{setName(event.target.value)}} /><br/><br/>
        Status  : <input type="text" id="status" style={{ width: '300px' }} className={classname.status} value={status} onChange={(event)=>{setStatus(event.target.value)}} /><br/><br/>
        Description : <input type="test" id="description" style={{ width: '300px' }} className={classname.description} value={description} onChange={(event)=>{setDescription(event.target.value)}} /><br/><br/>
        Picture  : <input type="text" id="picture" style={{ width: '300px' }} className={classname.picture} value={picture} onChange={(event)=>{setPicture(event.target.value)}} /><br/><br/>
        <div>
            <input type="button" className="btn btn-primary" value="Create Facility" onClick={fnCreate} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" className="btn btn-secondary" value="Update Facility" onClick={fnUpdate} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" className="btn btn-danger" value="Delete Facility" onClick={fnDelete} />
        </div>
        <div>
            <br/><br/><br/>
        </div>
    </div>
}

export default FacilityForm;

