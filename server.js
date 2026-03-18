import { createServer } from 'http'
import app from './dist/index.js'

const port = parseInt(process.env.PORT || '3000', 10)
const hostname = '0.0.0.0'

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ['GET', 'HEAD'].includes(req.method) ? null : req
  })

  try {
    const response = await app.fetch(request)
    res.writeHead(response.status, Object.fromEntries(response.headers))
    res.end(await response.arrayBuffer())
  } catch (err) {
    console.error('Error:', err)
    res.writeHead(500)
    res.end('Internal Server Error')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

