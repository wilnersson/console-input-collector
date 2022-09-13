/**
 * Module for InputCollector class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { InputReader } from './InputReader.js'

/**
 * Class for InputCollector.
 */
export class InputCollector {
  #reader

  /**
   * Asks the user a question and returns the string input.
   *
   * @param {string} question - The question to ask the user.
   * @returns {Promise<string>} - A promise that resolves to the users answer as a string.
   */
  async getStringInput (question) {
    this.#reader = new InputReader()

    const answer = await this.#reader.requestInput(question + ' ')

    this.#reader.close()
    return answer
  }

  /**
   * Asks the user a question and returns the answer as a whole integer number.
   *
   * @param {string} question - The question to ask the user.
   * @returns {Promise<number>} - A promise that resolves to the users answer as a number.
   */
  async getIntegerInput (question) {
    this.#reader = new InputReader()
    let answer
    let verifyAnswer

    do {
      answer = Number.parseInt(await this.#reader.requestInput(question + ' '))
      verifyAnswer = Number.isNaN(answer)
      if (verifyAnswer) console.log('Invalid answer, try again.')
    } while (verifyAnswer)

    this.#reader.close()
    return answer
  }
}
