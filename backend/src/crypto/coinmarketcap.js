const axios = require('axios');

const basetestUrl = 'https://sandbox-api.coinmarketcap.com';
const baseprodUrl = 'https://pro-api.coinmarketcap.com';

/**
 * Get the data from the API of coinmarketcap
 *
 * @param path the path of the API
 * @returns {Promise<*>} the data (json)
 */
const getCoinmarketcapData = async (path) => {
  let response = null;
  try {
    console.log('API Token: ' + process.env.CMC_API_KEY);
    response = await axios.get(`${baseprodUrl}${path}`, {
      headers: {
        // 'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c', // This is a fake token only valid for the sandbox
        'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
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