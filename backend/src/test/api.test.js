// Jest
const axios = require('axios')
const qs = require('qs')

// Global variables for the tests
let usertoken = ''
let userid = ''
let adminToken = ''

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
  usertoken = response.data.token
  expect(response.status).toBe(200)
})

test('Get the user information', async () => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/user/profile',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + usertoken
  let response = await axios(config)
  userid = response.data._id
  expect(response.status).toBe(200)
})

test('Update the user information', async () => {
  let data = qs.stringify({
    'email': 'jesty@test.com',
    'username': 'test1234'
  });
  let config = {
    method: 'post',
    url: 'http://localhost:4000/api/user',
    headers: {},
    data: data
  };
  config.headers.Authorization = 'Bearer ' + usertoken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

// TEST ADMIN
test('Login as admin', async () => {
  let data = qs.stringify({
    'email': 'admin@localhost',
    'password': 'admin123'
  });
  let config = {
    method: 'post',
    url: 'http://localhost:4000/api/auth/login/',
    headers: {},
    data: data
  };
  let response = await axios(config)
  adminToken = response.data.token
  expect(response.status).toBe(200)
})

// ADMIN - Settings
test('Get the settings', async () => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/settings',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

// Put the setting (popularCryptos and popularRss)
test('Update the settings', async () => {
  let data = qs.stringify({
    'popularCryptos': 10,
    'popularRss': 10
  });
  let config = {
    method: 'put',
    url: 'http://localhost:4000/api/settings',
    headers: {},
    data: data
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

// ADMIN - Cryptos
test('Get the list of cryptos', async () => {
  // route /api/admin/crypto/
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/admin/crypto/',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

// add a new crypto
test('Add a new crypto', async () => {
  // route /api/admin/crypto/
  let data = qs.stringify({
    'cmcId': '5994',
    'state': 'true',
  });
  let config = {
    method: 'post',
    url: 'http://localhost:4000/api/admin/crypto/',
    headers: {},
    data: data
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Change the state of a crypto', async () => {
  let config = {
    method: 'put',
    url: 'http://localhost:4000/api/admin/crypto/state/5994?state=false',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Delete a crypto', async () => {
  let config = {
    method: 'delete',
    url: 'http://localhost:4000/api/admin/crypto/5994',
    headers: {}
  }
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Delete the test user', async () => {
  let config = {
    method: 'delete',
    url: 'http://localhost:4000/api/admin/users/delete/' + userid,
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})