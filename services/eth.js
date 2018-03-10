import Web3 from 'web3'

// const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const eth = {}

web3.eth.getAccounts().then((accounts) => {
  console.log('accounts', accounts)
});

eth.createAccount = function() {
  return web3.eth.accounts.create()
}

eth.getBalanceAccount = function(address) {
  return new Promise((resolve, reject) => {
    web3.eth.getBalance(address).then((balance) => {
      return resolve(web3.utils.fromWei(balance, 'ether'))
    })
  })
}

export default eth
