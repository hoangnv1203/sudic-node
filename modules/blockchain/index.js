import drive from 'services/amqp'
import eth from 'services/eth'
import config from 'config/config'
import web3 from 'config/web3'
import {
  create as createCoin,
  list as listCoin,
  setBalance
} from 'services/coin'

async function getBalance(coin) {
  let balance = await eth.getBalanceAccount(coin.address)

  if (balance > coin.balance) {
    setBalance(coin._id, balance)
  }
}

export const subscribeCreateWallet = function() {
  drive.subscribe(config.channel.reqCreateWallet, (message) => {
    const object = JSON.parse(message)

    const ethData = {
      coin: 'ETH',
      name: 'Ethereum',
      balance: 0
    }

    const data = eth.createAccount()
    ethData.address = data.address
    ethData.privateKey = data.privateKey

    // createCoin(ethData)

    drive.publish(config.channel.resCreateWallet, {
      userId: object.userId,
      eth: ethData
    })
  })
}

export const updateBalanceAccount = async () => {
  const coins = await listCoin()

  coins.forEach((coin) => {
    getBalance(coin)
  })
}
