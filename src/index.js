const http = require('http')
const chalk = require('chalk')
const conf = require('./config/configDefault')
const fs = require('fs')
// const path = require('path')

const server = http.createServer((req, res) => {
  const filePath = `${conf.root}${req.url}`
  // const filePath = path.join(conf.root, req.url)
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.write(err.toString())
      res.end()
      return
    }
    if (stats.isFile()) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      const stream = fs.createReadStream(filePath)
      stream.pipe(res)
      return
    }
    if (stats.isDirectory()) {
      res.statusCode = 200
      fs.readdir(filePath, (err, files) => {
        if (err) {
          res.setHeader('Content-Type', 'text/plain')
          res.write(err.toString())
          res.end()
          return
        }
        res.setHeader('Content-Type', 'text/plain')
        res.write(files.join('<==>'))
        res.end()
      })
    }
  })
})
server.listen(conf.port, conf.host, () => {
  console.log(`Server running at ${chalk.green(`http://${conf.host}:${conf.port}`)}`)
})
