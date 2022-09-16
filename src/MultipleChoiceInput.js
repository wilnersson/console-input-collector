/**
 * Module for MultipleChoiceInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { SingleChoiceInput } from './SingleChoiceInput.js'

/**
 * Class for MultipleChoiceInput.
 */
export class MultipleChoiceInput extends SingleChoiceInput {
  /**
   * Builds the string that represents the options.
   *
   * @returns {string} - Options for the user.
   */
  getRenderText () {
    let textToRender = ''

    for (let i = 0; i < super.getChoices().length; i++) {
      textToRender += `${i + 1}. ${super.getChoices()[i]} \n`
    }

    textToRender += `Make your choices, one or more separated by spaces (1-${super.getChoices().length}): `

    return textToRender
  }
}
