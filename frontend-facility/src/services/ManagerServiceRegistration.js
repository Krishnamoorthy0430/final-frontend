import axios from "axios";

class ManagerServiceRegistration
{
    URL="http://localhost:8080/v1/manager";

    createManager(manager)
    {
        return axios.post(this.URL+"/register",manager);
    }
    updateManager(id, manager)
    {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.put(this.URL+"/"+id, manager, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }

    getManager()
    {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.get(this.URL, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }

    approveResident(username)
    {
        if (this.role === 'Resident') {
            console.error("Only a Manager can update a facility");
            return Promise.reject("Unauthorized");
        } else if (this.role === 'Manager') {
            return axios.put(this.URL+"/approve-signup/"+username+"/true", {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    }
}
export default new ManagerServiceRegistration();