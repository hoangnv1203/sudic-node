import User from 'models/User'

export const list = async () => {
  return await User.find().lean().exec()
}

export const create = async (userId, createdDate) => {
  return await new User({
    userId,
    createdDate
  }).save()
}

export const findById = async (id) => {
  return await User.findById(id).lean()
}

export const setBalanceEth = async (id, balance) => {
  return await User.findByIdAndUpdate(id, {
    balanceEth: balance
  }, {
    safe: true,
    new: true
  }).exec()
}
