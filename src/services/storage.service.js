import CryptoService from "./crypto.service";

// setSession in local storage
const setSession = (token, user) => {
  localStorage.setItem("token", token);
  // localStorage.setItem('user', JSON.stringify(user));
  const userString = JSON.stringify(user);
  // encrypt user data before store it on the localstorage

  const enc_data = CryptoService.encrypUsertData(userString);
  // console.log(enc_data)
  localStorage.setItem("user", enc_data);
};

// clear session of local storage
const clearSession = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

// refresh session by again storing data into local storage
const refreshSession = (user) => {
  // localStorage.setItem('user', user);
};

const getCurrentUser = () => {
  // console.log()
  const dec_user = localStorage.getItem("user");
  let user;

  if (dec_user && dec_user !== null) {
    // user = CryptoService.dcryptUserData(dec_user);
    user = JSON.parse(CryptoService.dcryptUserData(dec_user));
  }

  return user;
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const StorageService = {
  setSession,
  clearSession,
  refreshSession,
  getToken,
  getCurrentUser,
};

// export all functions
export default StorageService;
