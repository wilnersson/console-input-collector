/**
 * Module for InputReader.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import * as readline from 'node:readline/promises'

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
    const input = await this.#reader.question(question)

    return input
  }
}
