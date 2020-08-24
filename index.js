const Client = require('./lib/client').default
const client = new Client('localhost', 3000)
console.log(client)
