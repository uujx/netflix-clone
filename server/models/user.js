const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email address')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 60
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
})

userSchema.virtual('movies', {
  ref: 'Movie',
  localField: '_id',
  foreignField: 'userId'
})

userSchema.methods.toJSON = function () {
  const user = this
  const userObj = user.toObject()

  delete userObj.password
  delete userObj.tokens

  return userObj
}

userSchema.methods.generateAuthToken = async function () {
  const user = this

  const token = jwt.sign({ _id: user._id }, 'netflixclone', {
    expiresIn: '2 seconds'
  })

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Unable to login')
  }
  return user
}

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
