# win-key

**Retrieve your Windows Product Key using Node.js.**

## Installation

```
npm install win-key [-g]
```

## Quickstart

**CLI:**
```sh
$ win-key
F4K3-K3Y-D0NT-U5E-L0L
```

**API:**
```js
const winKey = require('win-key')

winKey()
  .then(console.log)
  // => F4K3-K3Y-D0NT-U5E-L0L
```

## API

### `require('win-key')()`

- **returns** a `<Promise>` which:
   - resolves with **key** => `<String>`: the Windows Product Key
   - rejects with **err** => `<Error>` if something went wrong

## Credits

- This module is just a simple Node.js interface to the more amazing and complex [ProduKey](http://www.nirsoft.net/utils/product_cd_key_viewer.html) by [Nir Sofer](http://www.nirsoft.net/about_nirsoft_freeware.html)

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).