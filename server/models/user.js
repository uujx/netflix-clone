const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true
  }
)

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

  const expireDate = new Date()
  expireDate.setDate(new Date().getDate() + 7)
  // expireDate.setTime(new Date().getTime() + 20000)

  try {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7 days'
    })
    user.tokens = user.tokens.concat({ token })
    await user.save()
  
    return { token, expireDate }
  } catch (error) {
    throw new Error(error)
  }
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
