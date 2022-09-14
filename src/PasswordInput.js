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
  #RANGE_ERROR = new RangeError('minLength/maxLenght must be numbers. minLength must be smaller than maxLength but larger than 0.')

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

    this.#validateMinLength()
    this.#validateMaxLength()
  }

  /**
   * Returns the validity of the input password.
   *
   * @returns {boolean} - Validity.
   */
  isValid () {
    return this.#isValid
  }

  /**
   * Getter for the input password.
   *
   * @returns {string} - The input password.
   */
  getInput () {
    return this.#inputPassword
  }

  /**
   * Validates the minLength parameter.
   *
   * @throws {RangeError} - If parameter is invalid.
   */
  #validateMinLength () {
    if (this.#minLength) {
      if (typeof this.#minLength !== 'number' || this.#minLength < 0) {
        throw this.#RANGE_ERROR
      }

      if (this.#maxLength && this.#minLength > this.#maxLength) {
        throw this.#RANGE_ERROR
      }
    }
  }

  /**
   * Validates the maxLength parameter.
   *
   * @throws {RangeError} - If parameter is invalid.
   */
  #validateMaxLength () {
    if (this.#maxLength) {
      if (typeof this.#maxLength !== 'number' || this.#maxLength < 1) {
        throw this.#RANGE_ERROR
      }

      if (this.#minLength && this.#maxLength < this.#minLength) {
        throw this.#RANGE_ERROR
      }
    }
  }
}
