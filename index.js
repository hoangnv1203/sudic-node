import express from 'express'
import morgan from 'morgan'
import config from './config/config'
import drive from 'services/amqp'
import {
  subscribeCreateWallet,
  updateBalanceAccount
} from 'modules/blockchain'

drive.connect().then((ch) => {
  drive.publish(config.channel.reqCreateWallet, 'Hello Hoang')

  subscribeCreateWallet()
  updateBalanceAccount()
  drive.subscribe(config.channel.resCreateWallet, (message) => {
    console.log('message', message);
  })
})


const system = express()

system.use(morgan('dev'))

system.listen(config.serverPort, () => console.log(`Server listen to :${config.serverPort}`))
