import axios from "axios";

const API_URL = "http://localhost:8080/auth";
const ROLE_API_URL = "http://localhost:8080/v1/manager/role";

class AuthService {
    login(username, password) {
        return axios
            .post(`${API_URL}/login`, { username, password })
            .then(response => {
                if (response.data.jwt) {
                    // Get role based on username
                    return axios.get(`${ROLE_API_URL}/${username}`)
                        .then(roleResponse => {
                            const role = roleResponse.data;

                            // Check if the role is 'Manager'
                            if (role === 'Manager') {
                                localStorage.setItem('managerToken', response.data.jwt);
                                localStorage.setItem('managerRole', role);
                                console.log("Manager Token:", response.data.jwt);
                                console.log("Role:", role);
                                return { token: response.data.jwt, role };
                            } else {
                                // Handle unauthorized role
                                console.error('Unauthorized role:', role);
                                return Promise.reject('Unauthorized role');
                            }
                        })
                        .catch(roleError => {
                            console.error('Error fetching role:', roleError);
                            return Promise.reject('Error fetching role');
                        });
                } else {
                    return Promise.reject('No JWT token received');
                }
            })
            .catch(error => {
                console.error('Login error:', error);
                return Promise.reject('Login error');
            });
    }

    logout() {
        // Clear all tokens on logout
        localStorage.removeItem('managerToken');
        localStorage.removeItem('managerRole');
    }

    getCurrentUser() {
        const managerToken = localStorage.getItem('managerToken');
        if (managerToken) {
            return { jwt: managerToken, role: 'Manager' };
        } else {
            return null;
        }
    }

    getToken() {
        return localStorage.getItem('managerToken');
    }

    getRole() {
        return localStorage.getItem('managerRole');
    }
}

export default new AuthService();

// .then(roleResponse => {
                        //     const role = roleResponse.data;
                        //     // Store new token based on role
                        //     if (role === 'Manager') {
                        //         localStorage.setItem('managerToken', response.data.jwt);
                        //         localStorage.setItem('managerRole', role);
                        //         console.log("Role is: " + role);
                        //         console.log("Manager Token is: \n" + response.data.jwt);
                        //     } else if (role === 'Resident') {
                        //         sessionStorage.setItem('residentToken', response.data.jwt);
                        //         sessionStorage.setItem('residentRole', role);
                        //         console.log("Role is: " + role);
                        //         console.log("Resident Token is: \n" + response.data.jwt);
                        //     } else {
                        //         console.error('Role not found for the given username.');
                        //     }
                        //     return response.data;
                        // });
                        //}
                //return response.data;
// import axios from "axios";

// const API_URL = "http://localhost:8080/auth";
// const ROLE_API_URL = "http://localhost:8080/v1/manager/role"

// class AuthService {
//     login(username, password) {
//         return axios
//         .post(API_URL+'/login', {
//             username,
//             password
//         })
//         .then(response => {
//             if (response.data.jwt) {
//                 return axios.get(ROLE_API_URL+"/"+username)
//                 .then(roleResponse => {
//                     const role = roleResponse.data;

//                     if(role=='Manager') {
//                         localStorage.setItem('managerToken', response.data.jwt);
//                         localStorage.setItem('managerRole', roleResponse.data)
//                         console.log("role is : "+role);
//                         console.log("Manager Token is : \n" + response.data.jwt);
//                     } else if (role == 'Resident') {
//                         sessionStorage.setItem('residentToken', response.data.jwt);
//                         sessionStorage.setItem('residentRole', roleResponse.data);
//                         console.log("role is : "+role);
//                         console.log("Resident Token is : \n" + response.data.jwt);
//                     } else {
//                         console.error('Role not found for the given username.');
//                     }
//                     return { ...response.data, role };
//                 });
//             }
//             return response.data;
//         }).catch(error => {
//             console.error('Login error:', error);
//         });

//     }

//     logout() {
//         localStorage.removeItem('managerToken');
//         localStorage.removeItem('residentToken');
//     }

//     getCurrentUser() {
//         const managerToken = localStorage.getItem('managerToken');
//         const residentToken = sessionStorage.getItem('residentToken');

//         return managerToken ? { jwt: managerToken, role: 'Manager' } : residentToken ? { jwt: residentToken, role: 'Resident' } : null;
//     }

//     getToken() {
//         return localStorage.getItem('managerToken') || sessionStorage.getItem('residentToken');
//     }

//     getRole() {
//         const managerRole = localStorage.getItem('managerRole');
//         const residentRole = sessionStorage.getItem('residentRole');
//         return localStorage.getItem('managerRole') || sessionStorage.getItem('residentRole');
//     }
// }

// export default new AuthService();
