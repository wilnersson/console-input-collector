/**
 * Module for IntegerInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Class for IntegerInput.
 */
export class IntegerInput {
  #inputInteger
  #minValue
  #maxValue
  #isValid = true

  /**
   * Constructor for IntegerInput.
   *
   * @param {number} inputInteger - The input number.
   * @param {number} minValue - Min value of input number for validation. null = no min value.
   * @param {number} maxValue - Max value of input number for validation. null = no max value.
   */
  constructor (inputInteger, minValue = null, maxValue = null) {
    this.#inputInteger = Number.parseInt(inputInteger)
    this.#validateInputType()

    if (this.#isValid) {
      this.#minValue = minValue
      this.#maxValue = maxValue

      this.#validateRangeParameters()
      this.#validateInputRange()
    }
  }

  /**
   * Returns the validity of the input number.
   *
   * @returns {boolean} - Validity.
   */
  isValid () {
    return this.#isValid
  }

  /**
   * Returns the input number.
   *
   * @returns {number} - The input number.
   */
  getInput () {
    return this.#inputInteger
  }

  /**
   * Checks if the input is in fact an integer and sets the validity accordingly.
   */
  #validateInputType () {
    if (Number.isNaN(this.#inputInteger)) {
      this.#isValid = false
    }
  }

  /**
   * Checks if the input number is in the supplied range and sets the validity accordingly.
   */
  #validateInputRange () {
    if (this.#minValue && this.#inputInteger < this.#minValue) {
      this.#isValid = false
    }

    if (this.#maxValue && this.#inputInteger > this.#maxValue) {
      this.#isValid = false
    }
  }

  /**
   * Checks the range parameters to make sure they are valid.
   *
   * @throws {TypeError} - If any parameters are of illegal type.
   * @throws {RangeError} - If any parameters have illegal range.
   */
  #validateRangeParameters () {
    // Throw Error if range limits are neither a number or null.
    if ((typeof this.#minValue !== 'number' && this.#minValue) || (typeof this.#maxValue !== 'number' && this.#maxValue)) {
      throw new TypeError('Min and max values must be numbers or null.')
    }

    // Throw Error if minValue is larger than maxValue.
    if (this.#minValue && this.#maxValue && this.#minValue > this.#maxValue) {
      throw new RangeError('Min value can not be larger than max value.')
    }
  }
}
