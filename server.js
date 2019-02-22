const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')

const PORT = 4000
const app = express()

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
})
