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

    this.#validateMaxLength()
    this.#isValid = this.#isInputLengthValid()
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
   *
   * @returns {boolean} - True if valid length.
   */
  #isInputLengthValid () {
    if (this.#maxLength && this.#inputString.length > this.#maxLength) {
      return false
    }
    return true
  }

  /**
   * Validates the maxLength parameter.
   *
   * @throws {RangeError} - If parameter is invalid.
   */
  #validateMaxLength () {
    if (this.#maxLength) {
      if (typeof this.#maxLength !== 'number' || this.#maxLength < 1) {
        throw new RangeError('maxLength must be a number larger than 0.')
      }
    }
  }
}
