/**
 * The main starting point of the application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { InputReader } from './InputReader.js'

/**
 * Export the main function.
 */
export const sayHello = async function () {
  const reader = new InputReader()

  const answer = await reader.requestInput('Hi, how are you?')

  console.log('You answered: ' + answer)

  reader.close()
}
