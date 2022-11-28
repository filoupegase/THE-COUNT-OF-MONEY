// Jest
const axios = require('axios')
const qs = require('qs')

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
  // You should get a token
  expect(response.status).toBe(200)
})