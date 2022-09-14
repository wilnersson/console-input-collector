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
  buildRenderText () {
    let textToRender = ''

    for (let i = 1; i <= this.#choices.length; i++) {
      textToRender += `${i}. ${this.#choices[i]} \n`
    }

    textToRender += `Your choice (1-${this.#choices.length}): `

    return textToRender
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

    if (this.#choices.every((choice) => { return typeof choice === 'string' })) {
      throw this.#TYPE_ERROR
    }
  }
}
