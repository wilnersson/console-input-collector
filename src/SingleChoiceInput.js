/**
 * Module for SingleChoiceInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Class for SingleChoiceInput.
 */
export class SingleChoiceInput {
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
   * Builds the string that represents the options.
   *
   * @returns {string} - Options for the user.
   */
  getRenderText () {
    let textToRender = ''

    for (let i = 0; i < this.#choices.length; i++) {
      textToRender += `${i + 1}. ${this.#choices[i]} \n`
    }

    textToRender += `Your choice (1-${this.#choices.length}): `

    return textToRender
  }

  /**
   * Sets the users choice.
   *
   * @param {number} userChoice - The choice the user makes in the form of a number.
   */
  setUserChoice (userChoice) {
    this.#userChoiceInput = userChoice
    this.#isUserChoiceValid = this.#validateUserChoice()
  }

  /**
   * Getter for the users choice.
   *
   * @returns {object} - Object representing the users choice both as a number and text representation.
   */
  getUserChoice () {
    return {
      choiceNumber: this.#userChoiceInput,
      choiceText: this.#choices[this.#userChoiceInput - 1]
    }
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
   * @returns {boolean} - True if valid.
   */
  #validateUserChoice () {
    if (typeof this.#userChoiceInput !== 'number') {
      return false
    } else if (this.#userChoiceInput < 1 || this.#userChoiceInput > this.#choices.length) {
      return false
    }

    return true
  }
}
