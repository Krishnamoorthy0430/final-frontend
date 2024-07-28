import axios from "axios";
import AuthService from "./AuthService";

class FacilityService {

    URL = "http://localhost:8080/v1/facility";

    constructor() {
        this.user = AuthService.getCurrentUser();
        this.token = AuthService.getToken();
        this.role = AuthService.getRole();

        if (!this.token) {
            console.error('No token found');
        } else {
            if (this.role === 'Manager') {
                console.log('Manager Token found : ', this.token);
            } else if (this.role === 'Resident') {
                console.log('Resident Token found : ', this.token);
            }
        }
    }

    fnGetAllFacilities() {
        return axios.get(this.URL+"/getall", {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    fnGetFacilityById(id) {
        return axios.get(this.URL+"/byid/"+id, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

}
export default new FacilityService();
