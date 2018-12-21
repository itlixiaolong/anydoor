
const fs = require('fs')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const path = require('path')
const compress = require('./compress')
const conf = require('../config/configDefault')
const handlebars = require('handlebars')
const teplPath = path.join(__dirname, '../template/index.tpl')
const source = fs.readFileSync(teplPath) // 读取template
const template = handlebars.compile(source.toString()) // 使用handlebars预编译一模版
module.exports = async function (req, res, filePath) {
  try {
    const stats = await stat(filePath)
    if (stats.isFile()) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      let stream = fs.createReadStream(filePath)
      if (filePath.match(conf.compress)) {
        stream = compress(stream, req, res)
      }
      stream.pipe(res)
    } else if (stats.isDirectory()) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      const files = await readdir(filePath)
      const dirName = path.relative(conf.root, filePath)
      const data = {
        title: path.basename(filePath),
        dir: dirName ? `/${dirName}` : '',
        files
      }
      res.write(template(data))
      res.end()
    }
  } catch (err) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.write(err.toString())
    res.end()
  }
}
