const http = require('http')
const chalk = require('chalk')
const conf = require('./config/configDefault')
// const fs = require('fs')
// const promisify = require('util').promisify
// const stat = promisify(fs.stat)
// const readdir = promisify(fs.readdir)
const route = require('./helper/route')
// const path = require('path')

const server = http.createServer((req, res) => {
  const filePath = `${conf.root}${req.url}`
  route(req, res, filePath)
  // const filePath = path.join(conf.root, req.url)
  // try {
  //   const stats = stat(filePath)
  //   if (stats.isFile()) {
  //     res.statusCode = 200
  //     res.setHeader('Content-Type', 'text/plain')
  //     const stream = fs.createReadStream(filePath)
  //     stream.pipe(res)
  //   } else if (stats.isDirectory()) {
  //     res.statusCode = 200
  //     res.setHeader('Content-Type', 'text/plain')
  //     const files = readdir(filePath)
  //     res.write(files.join('<==>'))
  //     res.end()
  //   }
  // } catch (err) {
  //   res.statusCode = 404
  //   res.setHeader('Content-Type', 'text/plain')
  //   res.write(err.toString())
  //   res.end()
  // }
})
server.listen(conf.port, conf.host, () => {
  console.log(`Server running at ${chalk.green(`http://${conf.host}:${conf.port}`)}`)
})
