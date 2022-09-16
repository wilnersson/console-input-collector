/**
 * Module for ChoiceInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Class for ChoiceInput, intended to be used like a superclass.
 */
export class ChoiceInput {
  #choices = []
  #userChoiceInput
  #isUserChoiceValid = false
  #TYPE_ERROR = new TypeError('choices must be an array of strings.')

  /**
   * Constructor for SingleChoiceInput.
   *
   * @param {string[]} choices - Choices displayed to the user as an array of strings.
   */
  constructor (choices) {
    this.#choices = choices

    this.#validateChoices()
  }

  /**
   * Returns a copy of the choices array.
   *
   * @returns {string[]} - An array of choices.
   */
  getChoices () {
    return Array.from(this.#choices)
  }

  /**
   * Sets the users choice.
   *
   * @param {number} userChoice - The choice the user makes in the form of a number.
   */
  setUserChoice (userChoice) {
    this.#userChoiceInput = userChoice
    this.#isUserChoiceValid = this.validateUserChoice(this.#userChoiceInput)
  }

  /**
   * Builds the string that represents the options.
   *
   * @returns {string} - Options for the user.
   */
  getChoicesText () {
    let resultingText = ''

    for (let i = 0; i < this.#choices.length; i++) {
      resultingText += `${i + 1}. ${this.#choices[i]} \n`
    }

    return resultingText
  }

  /**
   * Returns the validity of the set user choice.
   *
   * @returns {boolean} - Validity.
   */
  isValid () {
    return this.#isUserChoiceValid
  }

  /**
   * Validates the array of choices.
   *
   * @throws {TypeError} - If choices is invalid.
   */
  #validateChoices () {
    if (!Array.isArray(this.#choices)) {
      throw this.#TYPE_ERROR
    }

    if (!this.#choices.every((choice) => { return typeof choice === 'string' })) {
      throw this.#TYPE_ERROR
    }
  }

  /**
   * Validates that the users choice is a number in the correct range.
   *
   * @param {number} choice - User choice to validate.
   * @returns {boolean} - True if valid.
   */
  validateUserChoice (choice) {
    if (typeof choice !== 'number' || Number.isNaN(choice)) {
      return false
    } else if (choice < 1 || choice > this.#choices.length) {
      return false
    }

    return true
  }
}
