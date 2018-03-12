import mongoose from 'config/mongoose'

const schema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  coin: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  privateKey: {
    type: String,
    required: true,
    unique: true
  },
  balance: {
    type: Number
  },
  createdDate: {
    type: Date
  }
})

export default mongoose.model('Coin', schema)
