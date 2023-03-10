import axios from "axios";



 function signUp(body){
    return axios.post(`http://localhost:5000/signup`, body);
};


function signIn(body){;
     return axios.post(`http://localhost:5000/signin`, body);
 };
 

export { signUp, signIn };
