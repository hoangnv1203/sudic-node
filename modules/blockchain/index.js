import drive from 'services/amqp'
import eth from 'services/eth'
import config from 'config/config'
import web3 from 'config/web3'
import {
  create as createUser,
  list as listUser,
  setBalanceEth
} from 'services/user'


const blockchain = {}

async function getBalance(user) {
  let balance = await eth.getBalanceAccount(user.addressEth)

  if (balance > user.balanceEth) {
    setBalanceEth(user._id, balance)
  }
}

blockchain.subscribeCreateWallet = function() {
  drive.subscribe(config.channel.reqCreateWallet, (message) => {

    const resData = {
      userId: 'userId:' + Date.now(),
      data: {
        eth: ''
      },
      balanceEth: '0'
    }

    resData.data.eth = eth.createAccount()
    drive.publish(config.channel.resCreateWallet, resData)
    createUser(resData.userId, resData.data.eth.address, resData.balanceEth)
  })
}

blockchain.updateBalanceAccount = async () => {
  const users = await listUser()

  users.forEach((user) => {
    getBalance(user)
  })
}

export default blockchain
