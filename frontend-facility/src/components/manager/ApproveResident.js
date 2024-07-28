import axios from "axios";

const ApproveResident = (username) = {
    return axios.put(this.URL+"/approve-signup/"+username+"/true");
}
export default ApproveResident;