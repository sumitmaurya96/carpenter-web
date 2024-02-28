import axios from "axios";

import { getBoFromResponse, getErrorBoFromResponse } from "../common/util";
import { config } from "../config";

export const _adminLogin = async ({ email, password }) => {
  try {
    const path = `${config.baseUrl}/auth/admin/login`;
    const requestBody = {
      email,
      password,
    };

    const response = await axios.post(path, requestBody);

    return getBoFromResponse(response.data, response.status);
  } catch (error) {
    return getErrorBoFromResponse(error);
  }
};

export const _sendOTP = async ({ email, phone }) => {
  try {
    const otpPath = `${config.baseUrl}/auth/admin/otp/send`;
    const requestBodyForget = {
      email,
      phone,
    };
    console.log("forget password auth", requestBodyForget)
    const res = await axios.post(otpPath, requestBodyForget);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const _verifyOTP = async () => {
  try {
    const verify = `${config.baseUrl}/auth/admin/otp/verify`;
    const res = await axios.post(verify);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const _adminProfile = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type":"application/json"
  }
  const response = await axios.get(
    `${config.baseUrl}/auth/admin/profile`,
    { headers }
  );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const _resetPassword = async () => {
  try {
    const reset = `${baseUrl}/auth/admin/password/reset`;
    const res = await axios.post(reset);
    return res;
  } catch (error) {
    console.log(error);
  }
};
