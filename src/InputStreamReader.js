/**
 * Module for InputReader.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import readline from 'readline'

/**
 * Class for InputReader.
 */
export class InputStreamReader {
  #reader
  #hideInput

  /**
   * Constructor for InputReader.
   *
   * @param {boolean} hideInput - Set to true if you would like to hide user input.
   */
  constructor (hideInput = false) {
    this.#reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    this.#hideInput = hideInput
  }

  /**
   * Prints the provided question to the terminal and awaits user input.
   *
   * @param {string} question - Question to print to terminal.
   * @returns {string} - User input.
   */
  async requestInput (question) {
    const promise = new Promise((resolve) => {
      this.#reader.question(question, (answer) => {
        // Adds a newline after submit if input is a password.
        if (this.#hideInput) console.log()

        resolve(answer)
      })
    })

    /**
     * Replaces user input with * if isPassword = true.
     * Borrowed from: https://stackoverflow.com/questions/24037545/how-to-hide-password-in-the-nodejs-console.
     *
     * @param {string} stringToWrite - User input.
     */
    this.#reader._writeToOutput = (stringToWrite) => {
      if (this.#hideInput) {
        this.#reader.output.write('*')
      } else {
        this.#reader.output.write(stringToWrite)
      }
    }

    return await promise
  }

  /**
   * Closes the connection to the input stream.
   */
  close () {
    this.#reader.close()
  }
}
