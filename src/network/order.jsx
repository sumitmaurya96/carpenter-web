import axios from "axios";
import { config } from "../config";

export const _addOrders = async ({ payload }) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };

    console.log(payload);

    const response = await axios.post(
      `${config.baseUrl}/order/add-order`,
      payload,
      { headers }
    );
    return response.data,
     console.log("responce from network", response);
  } catch (error) {
    console.log({ error });
  }
};

export const _getOrders = async (pageNumbar, pageSize) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };
    const response = await axios.get(
      `${config.baseUrl}/order/get-order?pageNumber=${pageNumbar}&pageSize=${pageSize}`,
      { headers: headers }
    );
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const _getOrderById = async (id) => {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      };
  try {
    const response = await axios.get(
      `${config.baseUrl}/order/get-order/${id}`, { headers: headers }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const _updateOrderById = async (id, payload) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.patch(
      `${config.baseUrl}/order/update-order/${id}`, payload, {headers: headers}
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};



// export const _deleteOrderById = async (id, payload) => {
//   const headers = {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//     "Content-Type": "application/json",
//   };
//   try {
//     const response = await axios.patch(
//       `${config.baseUrl}/order/update-order/${id}`, payload, {headers: headers}
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };