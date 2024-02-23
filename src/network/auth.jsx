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

export const _sendOTP = async () => {
  try {
    const otpPath = `${baseUrl}/auth/admin/otp/send`;
    const res = await axios.post(otpPath);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const _verifyOTP = async () => {
  try {
    const verify = `${baseUrl}/auth/admin/otp/verify`;
    const res = await axios.post(verify);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const _adminProfile = async () => {
  try {
    const profile = `${baseUrl}/auth/admin/profile`;
    const res = await axios.get(profile);
    return res;
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
