const path = require('path')
const http = require('http')
const unzip = require('unzip')

const x32url = 'http://www.nirsoft.net/utils/produkey.zip'
const x64url = 'http://www.nirsoft.net/utils/produkey-x64.zip'

const x32path = path.join(__dirname, 'vendors', 'produkey-x32')
const x64path = path.join(__dirname, 'vendors', 'produkey-x64')

const download = (url, path) =>
  http.get(url, res =>
    res.pipe(unzip.Extract({ path }))
  )

download(x32url, x32path)
download(x64url, x64path)