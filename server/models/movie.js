const mongoose = require('mongoose')
const validator = require('validator')

const movieSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  genre_ids: [{
    type: Number,
    required: false
  }],
  title: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  original_name: {
    type: String,
    required: false
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
    required: false
  },
  first_air_date: {
    type: String,
    required: false
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
