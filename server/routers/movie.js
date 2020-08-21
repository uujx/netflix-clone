const express = require('express')
const Movie = require('../models/movie')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/api/movies', auth, async (req, res) => {
  const keys = Object.keys(req.body)
  const allowedKeys = [
    'id',
    'title',
    'name',
    'poster_path',
    'backdrop_path',
    'overview',
    'release_date',
    'first_air_date',
    'vote_average',
    'original_language'
  ]
  const isAllowed = keys.every((key) => allowedKeys.includes(key))
  if (!isAllowed) {
    return res.status(400).send('Invalid keys')
  }

  const userId = req.user._id
  const movie = new Movie({ userId, ...req.body })
  console.log(movie)
  try {
    await movie.save()

    res.status(201).send(movie)
  } catch (error) {
    res.status(400).send('Movie or show is already in your list')
  }
})

// Pagination - Get /api/movies?limit=10&skip=0
// Sorting - Get /api/movies?sortBy=createdAt:asc(desc)
router.get('/api/movies', auth, async (req, res) => {
  const sort = {}

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':')
    sort[parts[0]] = parts[1] === 'asc' ? 1 : -1
  }

  try {
    await req.user
      .populate({
        path: 'movies',
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate()

    res.status(200).send(req.user.movies)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router
