/**
 * Module for StringInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Class for StringInput.
 */
export class StringInput {
  #inputString
  #maxLength
  #isValid = true

  /**
   * Constructor for StringInput.
   *
   * @param {string} inputString - The input string.
   * @param {number} maxLength - Max length of input string for validation.
   */
  constructor (inputString, maxLength = null) {
    this.#inputString = inputString
    this.#maxLength = maxLength

    this.#checkMaxLength()
  }

  /**
   * Returns the validity of the input string.
   *
   * @returns {boolean} - Validity.
   */
  isValid () {
    return this.#isValid
  }

  /**
   * Returns the input string.
   *
   * @returns {string} - The input string.
   */
  getInput () {
    return this.#inputString
  }

  /**
   * Checks if the input string is valid according to the optional maximum string length.
   */
  #checkMaxLength () {
    if (this.#maxLength && this.#inputString.length > this.#maxLength) {
      this.#isValid = false
    }
  }
}
