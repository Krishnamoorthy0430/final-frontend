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
                            if (role === 'Resident') {
                                localStorage.setItem('residentToken', response.data.jwt);
                                localStorage.setItem('residentRole', role);
                                console.log("Resident Token:", response.data.jwt);
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
        localStorage.removeItem('residentToken');
        localStorage.removeItem('residentRole');
    }

    getCurrentUser() {
        const managerToken = localStorage.getItem('residentToken');
        if (managerToken) {
            return { jwt: managerToken, role: 'Resident' };
        } else {
            return null;
        }
    }

    getToken() {
        return localStorage.getItem('residentToken');
    }

    getRole() {
        return localStorage.getItem('residentRole');
    }
}

export default new AuthService();
