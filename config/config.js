import config from 'recursive-config'

export default config.load({
  defaults: {
    amqpHost: 'amqp://localhost',
    channel: {
      reqCreateWallet: 'reqCreateWallet',
      resCreateWallet: 'resCreateWallet'
    }
  }
})
