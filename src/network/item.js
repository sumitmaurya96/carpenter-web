import axios from "axios";
import { config } from "../config";

export const _getOrderItemsById = async (orderId) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get(
      `${config.baseUrl}/item/get-items/${orderId}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
