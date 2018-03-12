import mongoose from 'config/mongoose'

const schema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  createdDate: {
    type: Date,
    required: true
  }
})

export default mongoose.model('User', schema)
