import axios from "axios";

class ResidentRegistrationService
{
    URL = "http://localhost:8080/v1/resident"

    fnCreateResident(resident) {
        return axios.post(this.URL+"/register",resident);
    }

    fnGetAllResidents() {
        return axios.get(this.URL);
    }

    fnGetResidentById(id) {
        return axios.get(this.URL+"/"+id);
    }

    fnUpdateResident(id) {
        return axios.put(this.URL+"/"+id);
    }

    //Delete is not working on giving delete request from local host front end
    
    fnDeleteResident(id) {
        return axios.delete(this.URL+"/"+id);
    }

}
export default new ResidentRegistrationService();