const express = require('express')

const PORT = 4000
const app = express()

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
})
