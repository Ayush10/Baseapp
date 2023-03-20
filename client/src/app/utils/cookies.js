import Cookies from "js-cookie";
var CryptoJS = require("crypto-js");

export const setCookie = (name, data) => {
  //Encrypted using topsecret as a key in cryptoJs
  Cookies.set(name, CryptoJS.AES.encrypt(JSON.stringify(data), "topSecret"), {
    expires: 2,
  });
};

//returns as JSON after decrypting data
export const getCookie = (name) => {
  const data = Cookies.get(name); // get data from cookie to and
  if (data) {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, "topSecret").toString(CryptoJS.enc.Utf8)
    );
  }
  return null;
};
