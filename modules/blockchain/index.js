import drive from '../../services/amqp'
import eth from '../../services/eth'
import config from '../../config/config'

const blockchain = {}

blockchain.subscribeCreateWallet = function() {
  drive.subscribe(config.channel.reqCreateWallet, (message) => {
    console.log('message')
    const resData = {
      userId: message.userId,
      data: {
        eth: ''
      }
    }

    resData.data.eth = eth.createAccount()
    drive.publish(config.channel.resCreateWallet, resData)
  })
}

blockchain.getBalanceAccount = function() {

}

export default blockchain
