// Jest
const axios = require('axios')
const qs = require('qs')

// Global variables for the tests
let token = ''

// TEST USER
test('Create a new user', async () => {
  let data = qs.stringify({
    'email': 'jest@test.com',
    'password': 'password',
    'username': 'test123'
  });
  let config = {
    method: 'post',
    url: 'http://localhost:4000/api/auth/signup/',
    headers: {},
    data: data
  };
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Login with the new user', async () => {
  let data = qs.stringify({
    'email': 'jest@test.com',
    'password': 'password'
  });
  let config = {
    method: 'post',
    url: 'http://localhost:4000/api/auth/login/',
    headers: {},
    data: data
  };
  let response = await axios(config)
  // Get the token from the response and save it for the next tests
  token = response.data.token
  expect(response.status).toBe(200)
})
// Get user info, get /api/user/profile use the token for the bearer
test('Get the user information', async () => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/user/profile',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + token
  let response = await axios(config)
  expect(response.status).toBe(200)
})

// TEST ADMIN

// TEST CRYPTO

// TEST RSS