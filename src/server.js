import http from 'node:http'
import { jsonHandle } from './middlewares/jsonHandle.js'
import { routeHandler } from './middlewares/routeHandler.js'

async function handleRequest(req, res) {
  await jsonHandle(req, res)
  routeHandler(req, res);
}

const PORT = 3001

http.createServer(handleRequest).listen(PORT, () => {
  console.log(`\n 🚀 Server is running at http://localhost:${PORT} — Aposto que vai bombar! 😎`);
})
