import axios from "axios";

class CustomerService {
    getCustomerList(){
        return axios.get("https://reqres.in/api/users?page=1");
    }
}

export default new CustomerService();