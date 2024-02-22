import axios from "axios"


export const _addEmployee = async()=>{
   try{
    const res = await axios.post("http://localhost:8000/admin/add-employee");
    return res.data;
   }catch(error){
    console.log(error);
   }
}


export const _getEmployee = async()=>{
    try{
        const res = await axios.get("http://localhost:8000/admin/get-employee?skip=0&limit=10");
        return res.data;
    }catch(error){
        console.log(error);
    }
}

export const _getEmployeeById = async () =>{
    try{
        const res = await axios.get("http://localhost:8000/admin/get-employee/0500b535-339f-4e42-8a6a-a835c0d0a7b3");
        return res
    }catch(error){
        console.log(error);
    }
}

export const _updateEmployeeById = async () =>{
    try{
        const res = await axios.patch("http://localhost:8000/admin/update-employee/0500b535-339f-4e42-8a6a-a835c0d0a7b3");
        return res
    }catch(error){
        console.log(error);
    }
}

export const _deleteEmployeeById = async () =>{
    try{
        const res = await axios.delete("http://localhost:8000/admin/delete-employee/0500b535-339f-4e42-8a6a-a835c0d0a7b3");
        return res
    }catch(error){
        console.log(error);
    }
}