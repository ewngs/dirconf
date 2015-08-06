# Load and Merge Configurations from a Directory

This simple module loads all .js files from a directory, merges the exported objects and returns the result.
It can be used to store configuration parameters in separate files.

## Installation

```
npm install dirconf --save
```

## Usage

```
var conf = require('dirconf')('./configs');
```
