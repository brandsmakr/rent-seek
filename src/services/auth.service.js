import API from "../utils/api";

const register = (data) => {
  return API.post("/user/create-account", {
    ...data,
  }).then((response) => {
    return response.data;
  });
};

const login = (data) => {
  return API.post("/user/account-log-in", {
    ...data,
  }).then((response) => {
    return response.data;
  });
};

const verifyCode = (email, verification_code) => {
  return API.put("/user/verify-account", {
    email: email,
    otp: verification_code,
  }).then((response) => {
    return response.data;
  });
};

const resendOtp = (data) => {
  return API.get("/user/resend-otp", {
    ...data,
  }).then((response) => {
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const isLoggedIn = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    return true;
  } else {
    return false;
  }
  // return !!(user && token);
};

const AuthService = {
  register,
  login,
  logout,
  isLoggedIn,
  verifyCode,
  resendOtp
};

export default AuthService;
