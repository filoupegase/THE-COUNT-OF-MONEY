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

test('Delete the test user', async () => {
  // /api/admin/users/delete/:id where id is the user id
  let config = {
    method: 'delete',
    url: 'http://localhost:4000/api/admin/users/delete/' + userid,
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})