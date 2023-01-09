// Jest
const axios = require('axios')
const qs = require('qs')

// Global variables for the tests
let usertoken = ''
let userid = ''
let adminToken = ''
let rssFeedId = ''

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


// TEST CRYPTO
test('Get popular crypto', async () => {
  // route /api/crypto/popular
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/crypto/popular',
  };
  let response = await axios(config)
  expect(response.status).toBe(200)
})

// Get the information of the crypto in the db
test('Get the information of the crypto in the db', async () => {
  // /api/crypto/info
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/crypto/info'
  }
  let response = await axios(config)
  expect(response.status).toBe(200)
})


// TEST RSS
// test('Get the active rss feed article', async () => {
//   let config = {
//     method: 'get',
//     url: 'http://localhost:4000/api/rss/',
//   };
//   let response = await axios(config)
//   expect(response.status).toBe(200)
// })

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
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/admin/crypto/',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Add a new crypto', async () => {
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

// ADMIN - RSS
test('Get the list of RSS', async () => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/admin/rss/',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Add a new RSS', async () => {
  let data = qs.stringify({
    'name': 'test',
    'link': 'https://www.test.com/rss',
    'state': 'true',
  });
  let config = {
    method: 'post',
    url: 'http://localhost:4000/api/admin/rss/',
    headers: {},
    data: data
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  rssFeedId = response.data._id
  expect(response.status).toBe(201)
})

test('Change the state of a RSS', async () => {
  let config = {
    method: 'put',
    url: 'http://localhost:4000/api/admin/rss/state/' + rssFeedId + '?state=false',
    headers: {}
  };
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Get a specific RSS', async () => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/admin/rss/' + rssFeedId,
    headers: {}
  }
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Delete a RSS', async () => {
  let config = {
    method: 'delete',
    url: 'http://localhost:4000/api/admin/rss/' + rssFeedId,
    headers: {}
  }
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

// ADMIN - Users
test('Get the list of users', async () => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/api/admin/users/',
    headers: {}
  }
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Give a user admin rights', async () => {
  let config = {
    method: 'put',
    url: 'http://localhost:4000/api/admin/users/' + userid,
    headers: {}
  }
  config.headers.Authorization = 'Bearer ' + adminToken
  let response = await axios(config)
  expect(response.status).toBe(200)
})

test('Remove a user admin rights', async () => {
  let config = {
    method: 'delete',
    url: 'http://localhost:4000/api/admin/users/' + userid,
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