import axios from "axios";

class UserLoginService
{
    URl = 'http://localhost:8080/auth/login'

    fnLogin(authenticationRequest)
    {
        return axios.post(this.URl,authenticationRequest)
    }
}
export default new UserLoginService;