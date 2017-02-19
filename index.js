const exec = require('child_process').exec
const fs = require('fs')

module.exports = () => {
  return new Promise((resolve, reject) => {

    // 1. create a temp file
    const tempFile = `${__dirname}/keys-${process.arch}.tmp-${process.hrtime().pop()}.json`
    fs.writeFile(tempFile, '', err => {
      if (err)
        return reject(err)

      // 2. execute ProduKey with 'save as json' flag which writes the keys into the temp file
      const cmd = `${__dirname}/vendors/produkey-${process.arch}/ProduKey.exe /sjson ${tempFile}`
      exec(cmd, err => {
        if (err)
          return fs.unlink(tempFile, () => reject(err))

        // 3. read the temp file
        fs.readFile(tempFile, (err, data) => {
          if (err)
            return fs.unlink(tempFile, () => reject(err))

          // 4. remove the temp file
          fs.unlink(tempFile, () => {
            try {
              resolve(
                // 5. parse the file content and get the key
                JSON.parse(data.toString())
                .filter(k => k['Product Name'].startsWith('Windows'))
                .pop()['Product Key']
              )
            } catch (e) {
              reject(e)
            }
          })
        })
      })
    })
  })
}