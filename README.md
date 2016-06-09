# Load configuration files from a directory

[![Build Status](https://travis-ci.org/ewngs/dirconf.svg?branch=master)](https://travis-ci.org/ewngs/dirconf)

This simple module loads all .js files from a given directory, merges the exported
objects and returns the result.
This is handy if you want to store your configuration parameters in separate files.

## Installation

```
npm install dirconf --save
```

## Usage

Assume you have a `configs` directory, with the following files in it:

`mongodb.js`
```
module.exports = {
  mongodb: {
    host: "localhost",
    port: "31881"
  }
};
```

`mailer.js`
```
module.exports = {
  mailer: {
    method: "SMTP",
    relayHost: "10.10.0.143",
    port: "587"
  }
};
```

Then you can load the merged configutation object with:
```
var conf = require('dirconf')('./configs');
```

In this example `conf` will contain the merged objects:
```
{
  mongodb: {
    host: "localhost",
    port: "31881"
  },
  mailer: {
    method: "SMTP",
    relayHost: "10.10.0.143",
    port: "587"
  }
}
```

## License

MIT. See the LICENSE file for details.
