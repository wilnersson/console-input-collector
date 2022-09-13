/**
 * Module for InputCollector class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { InputStreamReader } from './InputStreamReader.js'
import { StringInput } from './StringInput.js'

/**
 * Class for InputCollector.
 */
export class InputCollector {
  #reader
  #INPUT_ERROR

  /**
   * Constructor for InputCollector.
   */
  constructor () {
    this.#INPUT_ERROR = new Error('Invalid input.')
    this.#INPUT_ERROR.name = 'ValidationError'
  }

  /**
   * Asks the user a question and returns the string input.
   *
   * @param {string} question - The question to ask the user.
   * @param {number} maxAnswerLength - Optional maximum allowed string length for the answer.
   * @returns {string} - The validated answer from the user.
   * @throws {Error} - ValidationError if user input is not valid.
   */
  async getStringInput (question, maxAnswerLength = null) {
    this.#reader = new InputStreamReader()

    const stringInput = new StringInput(await this.#reader.requestInput(question + ' '), maxAnswerLength)
    this.#reader.close()

    if (stringInput.isValid()) return stringInput.getInput()
    throw this.#INPUT_ERROR
  }

  /**
   * Asks the user a question and returns the answer as a whole integer number.
   *
   * @param {string} question - The question to ask the user.
   * @returns {Promise<number>} - A promise that resolves to the users answer as a number.
   */
  async getIntegerInput (question) {
    this.#reader = new InputStreamReader()
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
