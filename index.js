import express from 'express'
import morgan from 'morgan'
import config from './config/config'
import drive from 'services/amqp'
import blockchain from 'modules/blockchain'

drive.connect().then((ch) => {
  drive.publish(config.channel.reqCreateWallet, new Buffer('Hello Hoang'))

  blockchain.subscribeCreateWallet()
  // blockchain.getBalanceAccount()
  // drive.subscribe(config.channel.resCreateWallet, (message) => {
  //   console.log('message', message.content.toString());
  // })
})


const system = express()

system.use(morgan('dev'))

system.listen(config.serverPort, () => console.log(`Server listen to :${config.serverPort}`))
