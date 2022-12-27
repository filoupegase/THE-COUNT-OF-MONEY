const express = require('express');
const router = express.Router();

const cryptoController = require('../../controller/users');

router.get('/', async (req, res, next) => {
  try {
    const data = await cryptoController.getUsers();
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await cryptoController.setUserAdmin(id);
    if (!data) {
      throw Error('User not found');
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await cryptoController.removeUserAdmin(id);
    if (!data) {
      throw Error('User not found');
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

router.delete('/delete/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await cryptoController.deleteUser(id);
    if (!data) {
      throw Error('User not found');
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = router;