import Coin from 'models/Coin'

export const list = async () => {
  return await Coin.find().lean().exec()
}

export const create = async (coin) => {
  return await new Coin({
    userId: coin.userId,
    coin: coin.coin,
    name: coin.name,
    address: coin.address,
    privateKey: coin.privateKey,
    balance: coin.balance,
    createdDate: Date.now()
  }).save()
}

export const findById = async (id) => {
  return await Coin.findById(id).lean()
}

export const findByUserId = async (userId) => {
  return await Coin.findOne({ userId }).lean()
}

export const findByAddress = async (address) => {
  return await Coin.findOne({ address }).lean()
}

export const setBalance = async (id, balance) => {
  return await Coin.findByIdAndUpdate(id, {
    balance: balance
  }, {
    safe: true,
    new: true
  }).exec()
}
