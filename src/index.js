/**
 * The main starting point of the application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { InputReader } from './InputReader.js'

/**
 * Ask the user a question and returns the string input.
 *
 * @param {string} question - The question to ask the user.
 * @returns {string} - The answer from the user.
 */
export async function getStringInput (question) {
  const reader = new InputReader()

  const answer = await reader.requestInput(question + ' ')

  reader.close()
  return answer
}
