const mongoose = require('mongoose')
const validator = require('validator')

const movieSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  poster_path: {
    type: String,
    required: true
  },
  backdrop_path: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  first_air_date: {
    type: String,
    required: true
  },
  vote_average: {
    type: Number,
    required: true
  },
  original_language: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
