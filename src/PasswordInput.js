/**
 * Module for PasswordInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Class for PasswordInput.
 */
export class PasswordInput {
  #inputPassword
  #minLength
  #maxLength
  #isValid = true

  /**
   * Constructor for PasswordInput.
   *
   * @param {string} inputPassword - The input password.
   * @param {number} minLength - Min length of input password for validation.
   * @param {number} maxLength - Max length of input password for validation.
   */
  constructor (inputPassword, minLength = null, maxLength = null) {
    this.#inputPassword = inputPassword
    this.#minLength = minLength
    this.#maxLength = maxLength
  }
}
