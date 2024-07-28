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

    fnCreateFacility(facility) {
        if (this.role === 'Resident') {
            console.error("Only a Manager can create a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.post(this.URL, facility, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }

    fnUpdateFacility(id, facility) {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.put(this.URL+"/"+id, facility, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
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

    fnDeleteFacility(id) {
            return axios.delete(this.URL+"/"+id, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
}

export default new FacilityService();


//     constructor() {
//         this.managerToken = localStorage.getItem('managerToken');
//         this.residentToken = localStorage.getItem('residentToken');
//         this.role = AuthService.getRole();
//         this.user = AuthService.getCurrentUser();
        

//         if (!this.managerToken && !this.residentToken) {
//             console.error('No token found');
//             // Handle the absence of a token as needed.
//         } else if(this.user === 'Manager')
//         {
//             console.log('Manager Token found : ', this.managerToken);
//         }  if(this.user === 'Resident')
//         {
//             console.log('Resident Token found : ', this.residentToken);
//         }
//     }

//     fnCreateFacility(facility)
//     {
//         console.log(this.user);
//         if (this.user === 'Manager') {
//             return axios.post(this.URL, facility, {
//                 headers: {
//                     'Authorization': `Bearer ${this.managerToken}`
//                 }
//             });
//         } else {
//             console.error("You do not have authorization to create a facility");
//             return Promise.reject("Unauthorized");
//         }
//     }

//     fnUpdateFacility(id, facility)
//     {
        
//         return axios.put(this.URL+"/"+id, facility, {
//             headers: {
//                 'Authorization': `Bearer ${this.managerToken}`
//             }
//         });
//     }

//     gnGetAllFacilities()
//     {
//         return axios.get(this.URL+"/getall", {
//             headers: {
//                 'Authorization': `Bearer ${this.managerToken || this.residentToken}`
//             }
//         });
//     }

//     fnGetFacilityById(id)
//     {
//         return axios.get(this.URL+"/byid/"+id, {
//             headers: {
//                 'Authorization': `Bearer ${this.managerToken || this.residentToken}`
//             }
//         });
//     }

//     fnDeleteFacility(id)
//     {
//         return axios.delete(this.URL+"/"+id, {
//             headers: {
//                 'Authorization': `Bearer ${this.managerToken}`
//             }
//         });
//     }
// }

// export default new FacilityService();