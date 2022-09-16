/**
 * Module for SingleChoiceInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { ChoiceInput } from './ChoiceInput.js'

/**
 * Class for SingleChoiceInput.
 */
export class SingleChoiceInput extends ChoiceInput {
  #userChoiceInput

  /**
   * Builds the string that represents the options.
   *
   * @returns {string} - Options for the user.
   */
  getRenderText () {
    let resultingText = super.getChoicesText()

    resultingText += `Your choice (1-${super.getChoices().length}): `

    return resultingText
  }

  /**
   * Getter for the users choice.
   *
   * @returns {object} - Object representing the users choice both as a number and text representation.
   */
  getUserChoice () {
    return {
      choiceNumber: super.getUserChoiceInput(),
      choiceText: super.getChoices()[super.getUserChoiceInput() - 1]
    }
  }
}
