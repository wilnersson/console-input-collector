# Input Collector
Collect user input in your terminal input quickly and easily.

## Motivation
Instead of building your own functions for listening to the input stream, just request a type of input and supply the question. Input Collector handles collecting and validating the answers for you. Choose from five types of input collection:

* Strings
* Integers
* Passwords
* Single choice
* Multiple choice

## Example usage

```javascript
import collector from 'input-collector'

const userAge = await collector.requestIntegerInput('What year were you born?', 1900, 2030) // Answers outside supplied min and max range throws an exception.

console.log(userAge) // Logs user answer in terminal.
```

## Installation

Note that Input Collector is an ESM-only module, it can not be imported with `require()`.

```bash
npm install input-collector
```

Alternatively if you simply clone the Github repository, copy all files in the `src` folder to a destination of your choice, and import the default export from the `index.js`-file.

## Known issues

[bug] Erasing password input breaks output line ([#1][i1])

## Licence

[MIT](./LICENSE)