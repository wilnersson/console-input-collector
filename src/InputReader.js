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
export class InputReader {
  #reader

  /**
   * Constructor for InputReader.
   */
  constructor () {
    this.#reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
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
        resolve(answer)
      })
    })
    return await promise
  }

  /**
   * Closes the connection to the input stream.
   */
  close () {
    this.#reader.close()
  }
}
