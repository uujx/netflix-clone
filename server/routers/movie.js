const express = require('express')
const Movie = require('../models/movie')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/api/movies', auth, async (req, res) => {
  const keys = Object.keys(req.body)
  const allowedKeys = [
    'id',
    'genre_ids',
    'title',
    'name',
    'original_name',
    'poster_path',
    'backdrop_path',
    'overview',
    'release_date',
    'first_air_date',
    'vote_average',
    'popularity',
    'original_language',
    'origin_country',
    'vote_count'
  ]
  const isAllowed = keys.every((key) => allowedKeys.includes(key))
  if (!isAllowed) {
    return res.status(400).send('Invalid keys')
  }

  const userId = req.user._id
  const movie = new Movie({ userId, ...req.body })
  try {
    await movie.save()

    res.status(201).send(movie)
  } catch (error) {
    res.status(400).send(error._message)
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

router.delete('/api/movies/:id', auth, async (req, res) => {
  const movieId = parseInt(req.params.id)

  try {
    const movie = await Movie.findOneAndRemove({ id: movieId }).exec()
    
    if (!movie) {
      return res.status(404).send()
    }

    res.status(200).send(movie)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router
