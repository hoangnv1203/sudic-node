import config from 'recursive-config'

export default config.load({
  defaults: {
    amqpHost: 'amqp://localhost',
    httpProvider: 'http://localhost:8545',
    channel: {
      reqCreateWallet: 'reqCreateWallet',
      resCreateWallet: 'resCreateWallet'
    },
    aws: {
      region: 'us-west-2',
      credentials: {
        accessKeyId: 'xxx',
        secretAccessKey: 'xxx',
        sourceMailAws: 'xxxx@yy.io'
      }
    }
  }
})
