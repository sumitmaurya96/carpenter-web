import axios from "axios";
export const _addOrders = async ({payload}) => {
    try {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": 'application/json',
        }

        console.log(payload);

        const response = await axios.post('http://3.109.59.212:8000/order/add-order', { payload }, { headers });
        return response.data,
        console.log("responce from network", response);
    } catch (error) {
        console.log({error});
    }
}

export const _getOrders = async () => {
    try {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": 'application/json',
        }
        const response = await axios.get('http://3.109.59.212:8000/order/get-order?skip=0&limit=10', { headers: headers });
        return response.data;
    } catch (error) {
        console.log({error});
    }
}


export const _orderById = async ()=>{
    try{
     const response = await axios.get("http://3.109.59.212:8000/order/get-order/6446fabf-b120-4bbf-bfed-62b7fcbf0497");
     return response.data;
    }catch(error){
      console.log(error);
    }
}

export const _updateOrderById = async ()=>{
    try{
     const response = await axios.patch("http://3.109.59.212:8000/order/update-order/6446fabf-b120-4bbf-bfed-62b7fcbf0497");
     return response.data;
    }catch(error){
      console.log(error);
    }
}