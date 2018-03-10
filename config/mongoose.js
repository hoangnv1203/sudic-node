import Bluebird from 'bluebird'
import mongoose from 'mongoose'
import config from 'config/config'

mongoose.Promise = Bluebird
mongoose.connect(config.mongodb, {
  promiseLibrary: Bluebird
})

export default mongoose
