#!/usr/bin/env node

if (process.platform !== 'win32') {
  console.error('Error: win-key only works on windows')
  process.exit(1)
}

require('./')()
.then(console.log)
.catch(err => {
  console.error(err)
  process.exit(1)
})