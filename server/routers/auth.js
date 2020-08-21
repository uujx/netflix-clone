const express = require('express')
const validator = require('validator')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/api/auth/signup', async (req, res) => {
  const keys = Object.keys(req.body)
  const allowedKeys = ['email', 'password']
  const isAllowed = keys.every((key) => allowedKeys.includes(key))
  if (!isAllowed) {
    return res.status(400).send('Invalid keys')
  }

  const user = new User(req.body)

  try {
    const token = await user.generateAuthToken()
    await user.save()

    res.status(201).send({ user, token })
  } catch (error) {
    res.status(400).send('Email address already exists. Try to login instead.')
  }
})

router.post('/api/auth/signin', async (req, res) => {
  const keys = Object.keys(req.body)
  const allowedKeys = ['email', 'password']
  const isAllowed = keys.every((key) => allowedKeys.includes(key))
  if (!isAllowed) {
    return res.status(400).send('Invalid keys')
  }

  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()

    res.status(200).send({ user, token })
  } catch (error) {
    res.status(400).send('Incorrect email address or password')
  }
})

router.post('/api/auth/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token != req.token)
    await req.user.save()

    res.status(200).send()
  } catch (error) {
    res.status(500).send()
  }
})

router.post('/api/auth/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()

    res.status(200).send()
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router
