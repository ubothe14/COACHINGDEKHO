import { createServer } from 'http'
import app from './dist/index.js'

const port = parseInt(process.env.PORT || '3000', 10)
const hostname = '0.0.0.0'

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)

    // Build request options
    const requestOptions = {
      method: req.method,
      headers: req.headers,
    }

    // Only add body for non-GET/HEAD requests
    if (!['GET', 'HEAD'].includes(req.method)) {
      const chunks = []
      for await (const chunk of req) {
        chunks.push(chunk)
      }
      const body = Buffer.concat(chunks)
      if (body.length > 0) {
        requestOptions.body = body
      }
    }

    const request = new Request(url, requestOptions)
    const response = await app.fetch(request)

    res.writeHead(response.status, Object.fromEntries(response.headers))
    const buffer = await response.arrayBuffer()
    res.end(Buffer.from(buffer))
  } catch (err) {
    console.error('Server error:', err)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
})

