import { enSecKey } from "../config/app.config";
const CryptoJS = require("crypto-js");

//  encrypt log in user data
const encrypUsertData = (user) => {
  // const encryptedData = cryptoJs.AES.encrypt(
  //   JSON.stringify(user),
  //   enSecKey
  // ).toString();
  const encryptedData = CryptoJS.AES.encrypt(user, enSecKey).toString();
  return encryptedData;
};

// decrypt loged in user data
const dcryptUserData = (getUser) => {
  // const bytes = cryptoJs.AES.decrypt(getUser, enSecKey);
  // const decryptedJsonData =  JSON.parse(bytes.JSON(cryptoJs.enc.Utf8));
  var bytes = CryptoJS.AES.decrypt(getUser, enSecKey);
  var decryptedJsonData = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedJsonData;
};
const CryptoService = { encrypUsertData, dcryptUserData };

// export all functions
export default CryptoService;
