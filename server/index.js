const cors = require('cors')
const express = require('express')

const corsConfig = {
  optionsSuccessStatus: 200,
  origin: ['http://localhost:3000', 'http://localhost:8000']
}

const app = express()

app.use(cors(corsConfig))

const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.info('Express now listening on http://%s:%s', host, port)
})
