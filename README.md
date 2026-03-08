# Vanes : Format strings with placeholders (Node.js)
![CI](https://github.com/arghyadeep-k/vanes/workflows/CI/badge.svg?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_vanes&metric=alert_status)](https://sonarcloud.io/dashboard?id=arghyadeep-k_vanes)
![npm](https://img.shields.io/npm/v/vanes)
![npm bundle size](https://img.shields.io/bundlephobia/min/vanes)
![Libraries.io SourceRank](https://img.shields.io/librariesio/sourcerank/npm/vanes)
![Depfu](https://img.shields.io/depfu/arghyadeep-k/vanes)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/vanes)
![npm](https://img.shields.io/npm/dt/vanes)
![NPM](https://img.shields.io/npm/l/vanes?color=blue)
[![Ko-Fi](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://ko-fi.com/arghyadeep)

This package can help you format your strings easily with placeholders. Comes in handy when you are importing the strings from another module.

## Why Vanes?
When you're importing a string from a module, it is not possible to use $-based placeholders because the variables serving as the placeholders may not exist in the module where the strings are declared. To solve this, we came up with Vanes.

Using Vanes, you can place any keyword as your placeholder as long as you tie them in with braces (Remember: no spaces between the braces and the keyword). When you import the string in your other module, just pass that string and a comma separated key-value object where keys are the placeholders in the string and values are the variables or constants you want to replace them with. 

And, voila! Vanes will return you a string with all the values replaced.

## Installation

[![NPM](https://nodei.co/npm/vanes.png)](https://nodei.co/npm/vanes/)

**Install from command line:**

`npm install --save vanes`

Or

**Install via package.json:**

Add the following to your *package.json* file under dependencies

`"vanes": "^1.1.0"`



## Basic Usage
```javascript
const vanes = require('vanes');

let str = `Hello, {var}!`;
let value = 'World';

let result = vanes(str, {var: value});

console.log(result) 

//Output - Hello, World!
```

## API

**vanes(string, {key: value})**

- **string**: input string with placeholders in it

- **key**: variable serving as the placeholder in the string

- **value**: variable name/constant value that needs to replace the placeholder(key) in the string

Multiple key-value pairs can be sent separated by comma.

## TypeScript Support

Vanes includes TypeScript type definitions out of the box.

```typescript
import vanes = require('vanes');

const result = vanes("Hello, {name}!", { name: "World" });
// TypeScript will infer the return type as string
```

## Edge Cases

- **Missing keys**: Placeholders without a matching key in varList are replaced with an empty string
  ```javascript
  vanes("Hello, {name}!", {}) // Returns: "Hello, !"
  ```

- **Invalid input**: Non-string first argument returns an empty string
  ```javascript
  vanes(123, {name: "World"}) // Returns: ""
  ```

## Unit Testing

Unit testing has been added as part of the latest release.
To run the test case, download the package and run `npm test`.

## License

Vanes is published under the MIT license. For more information, see the accompanying LICENSE file. 

<br>

---

<br>

### PS: 
If you find this package useful, please consider giving a [star](https://github.com/arghyadeep-k/vanes) to this project on Github. 

And, if you are willing to [buy me a coffee](https://ko-fi.com/arghyadeep), that would be awesome. :)

<a href='https://ko-fi.com/arghyadeep' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
