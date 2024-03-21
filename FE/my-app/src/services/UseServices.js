import axios from "axios"
export const signupUser = async (data) =>{

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
        return res.data;


}