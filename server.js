import { createServer } from 'http'
import app from './dist/index.js'

const port = parseInt(process.env.PORT || '3000', 10)
const hostname = '0.0.0.0'

const server = createServer(app.fetch.bind(app))

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`)
})

