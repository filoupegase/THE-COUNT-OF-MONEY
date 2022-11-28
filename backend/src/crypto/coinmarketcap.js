const axios = require('axios');

const basetestUrl = 'https://sandbox-api.coinmarketcap.com';
const baseprodUrl = 'https://pro-api.coinmarketcap.com';


const getCoinmarketcapData = async (path) => {
  let response = null;
  try {
    response = await axios.get(`${basetestUrl}${path}`, {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c', // This is a fake token only valid for the sandbox
        'Accept-Encoding': 'null'
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getCoinmarketcapData,
}