import axios from "axios"

const baseUrl = "http://3.109.59.212:8000"

export const _adminLogin = async ({ email, password })=>{
    try{
        const path = `${baseUrl}/auth/admin/login`;
     const res = await axios.post(path, {
        email,
        password
     });

     const body = res.data;

     localStorage.setItem("token", body.data.token);

     return body;
    }catch(error){
        console.log({error});
        return {
            message: "Error occured"
        }
    }
}


export const _sendOTP = async ()=>{
   try{
    const otpPath = `${baseUrl}/auth/admin/otp/send`;
    const res = await axios.post(otpPath);
    return res;
   }catch(error){
    console.log(error);
   }
}

export const _verifyOTP = async ()=>{       
    try{
        const verify = `${baseUrl}/auth/admin/otp/verify`;
     const res = await axios.post(verify);
     return res;
    }catch(error){
     console.log(error);
    }
 }

 export const _adminProfile = async ()=>{      
    try{
        const profile = `${baseUrl}/auth/admin/profile`;
     const res = await axios.get(profile);
     return res;
    }catch(error){
     console.log(error);
    }
 }


 export const _resetPassword = async ()=>{  
    try{
        const reset = `${baseUrl}/auth/admin/password/reset`;
     const res = await axios.post(reset);
     return res;
    }catch(error){
     console.log(error);
    }
 }