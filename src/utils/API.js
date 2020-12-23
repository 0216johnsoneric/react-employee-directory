import axios from "axios";

let API = {
        getRandomUsers: function(){
        return axios.get("https://randomuser.me/api/?results=25&nat=us");
    }
}
export default API