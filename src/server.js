import http from 'node:http'

function handleRequest(req, res) {
  res.end('Hello World')
}

const PORT = 3001

http.createServer(handleRequest).listen(PORT, () => {
  console.log(`\n 🚀 Server is running at http://localhost:${PORT} — Aposto que vai bombar! 😎`);
})
