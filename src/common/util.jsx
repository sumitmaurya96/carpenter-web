const { constants } = require("./constant");

export const setToken = (token) => {
  localStorage.setItem(constants.localStorageTokenKey, token);
};

export const getToken = () => {
  return localStorage.getItem(constants.localStorageTokenKey);
};

export const getBoFromResponse = (response, statusCode) => {
  const message =
    (statusCode >= 400 || statusCode < 200) && response.message
      ? response.message
      : constants.defaultErrorMessage;

  return {
    data: response.data,
    message,
    statusCode,
  };
};

export const getErrorBoFromResponse = (error) => {
  const data = {
    message: constants.defaultErrorMessage,
    statusCode: 500,
    isRetriable: false,
  };

  if (error.response?.status === 401) {
    data.statusCode = 401;
    data.message = "You are not autorized";
  } else if (error.response?.status === 404) {
    data.statusCode = 404;
    data.message = "Resource is missing";
  }
  if (error.response?.status === 403) {
    data.statusCode = 403;
    data.message = "There is some conflict";
  }
  if (error.response?.status === 400) {
    data.statusCode = 404;
    data.message = "Looks like you are not making a correct request";
  }
  if (error.response?.status >= 500) {
    data.statusCode = error.response?.status;
    data.message = "We are down";
  }

  return data;
};
