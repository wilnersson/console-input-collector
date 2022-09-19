/**
 * Module for MultipleChoiceInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { ChoiceInput } from './ChoiceInput.js'

/**
 * Class for MultipleChoiceInput.
 */
export class MultipleChoiceInput extends ChoiceInput {
  #userChoiceInput = []
  #isUserChoiceValid = false

  /**
   * Sets the users choice.
   *
   * @param {string} userChoice - The choices the user makes in the form of a string of numbers, separated by spaces.
   */
  setUserChoice (userChoice) {
    if (typeof userChoice !== 'string') {
      throw new TypeError('userChoice must be a string.')
    }
    this.#userChoiceInput = this.#convertInputToArray(userChoice.trim())
    this.#isUserChoiceValid = this.#validateUserChoice()
  }

  /**
   * Builds the string that represents the options.
   *
   * @returns {string} - Options for the user.
   */
  getRenderText () {
    let resultingText = super.getChoicesText()

    resultingText += `Make your choices, one or more separated by spaces (1-${super.getChoices().length}): `

    return resultingText
  }

  /**
   * Getter for the users choice.
   *
   * @returns {object} - Object representing the users choice both as a number and text representation.
   */
  getUserChoice () {
    return this.#userChoiceInput.map((input) => {
      return {
        choiceNumber: input,
        choiceText: super.getChoices()[input - 1]
      }
    })
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
   * Validates that the user choice array contains numbers in the correct range.
   *
   * @returns {boolean} - True if all choices are valid.
   */
  #validateUserChoice () {
    for (const choice of this.#userChoiceInput) {
      if (!super.validateUserChoice(choice)) {
        return false
      }
    }

    return true
  }

  /**
   * Takes an input string of whole number separated by spaces and converts it to an array.
   *
   * @param {string} input - Input string.
   * @returns {number[]} - An array of numbers.
   */
  #convertInputToArray (input) {
    const resultingArray = input.split(' ')
    return resultingArray.map((choice) => { return Number.parseInt(choice) })
  }
}
