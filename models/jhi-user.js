import mongoose from 'config/mongoose'

const schema = mongoose.Schema({
  id: String,
  login: String,
  password: String,
  firstName: Boolean,
  lastName: String,
  email: String,
  langKey: String,
  imageUrl: String,
  activationKey: String,
  resetKey: String
})

export default mongoose.model('Jhi-user', schema)
