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
  /**
   * Asks the user a question and returns the string input.
   *
   * @param {string} question - The question to ask the user.
   * @returns {Promise<string>} - A promise that resolves to the users answer as a string.
   */
  async getStringInput (question) {
    const reader = new InputReader()

    const answer = await reader.requestInput(question + ' ')

    reader.close()
    return answer
  }
}
