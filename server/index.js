const ingredients = require('@chopped/ingredients')
const cors = require('cors')
const express = require('express')

const corsConfig = {
  optionsSuccessStatus: 200,
  origin: ['http://localhost:3000', 'http://localhost:3001']
}

const app = express()

app.use(cors(corsConfig))

app.get('/', (req, res) => res.json(ingredients))

const server = app.listen(3001, () => {
  const host = server.address().address
  const port = server.address().port

  console.info('Express now listening on http://%s:%s', host, port)
})
