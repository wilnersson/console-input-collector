# Input Collector
Collect user input in your terminal input quickly and easily.

Instead of building your own functions for listening to the input stream, just request a type of input and supply the question. Input Collector handles collecting and validating the answers for you. Choose from five types of input collection:

* Strings
* Integers
* Passwords
* Single choice
* Multiple choice

## Example usage

Note that Input Collector is an ESM-only module, it can not be imported with `require()`.

```javascript
import collector from 'input-collector'

const userAge = await collector.requestIntegerInput('What year were you born?', 1900, 2030) // Answers outside supplied min and max range throws an exception.

console.log(userAge) // Logs user answer in terminal.
```

## Installation

```bash
npm install @wilnersson/console-input-collector
```

Alternatively if you simply clone the Github repository, copy all files in the `src` folder to a destination of your choice, and import the default export from the `index.js`-file.

## Error handling

Throws an Error with name `ValidationError` when user input is invalid. Recommended usage is looping until you get a valid response.

### Example
```javascript
try {
  const userAge = await collector.requestIntegerInput('What year were you born?', 1900, 2030) // <-- User supplies 'hello world'
} catch (e) {
  console.log(e.name) // -> ValidationError
}
```

## Known issues

[bug] Erasing password input breaks output line ([#1][i1])

[i1]: https://github.com/wilnersson/console-input-collector/issues/1

## Testing

Package has been tested and confirmed to be working on the following version of node: `16.8.0`

Run the built in unit tests with:

```bash
npm test
```

Of course this only works if you have cloned the repository and installed all dev-dependencies.

```bash
npm install
```

## Version

1.0.2

## Licence

[MIT](./LICENSE)