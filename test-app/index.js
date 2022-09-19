/**
 * The main starting point for the test-application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import collector from '../src/index.js'

/**
 * Starts the test-application.
 */
async function start () {
  const collectedInformation = {}

  do {
    try {
      collectedInformation.firstName = await collector.getStringInput('Please enter your first name:', 2)
    } catch (error) {
      if (checkForInvalidInputError(error)) {
        printInvalidInputMessage()
      }
    }
  } while (!collectedInformation.firstName)

  do {
    try {
      collectedInformation.lastName = await collector.getStringInput('Please enter your last name:')
    } catch (error) {
      if (checkForInvalidInputError(error)) {
        printInvalidInputMessage()
      }
    }
  } while (!collectedInformation.lastName)

  do {
    try {
      collectedInformation.age = await collector.getIntegerInput('Please enter your age:', 1, 150)
    } catch (error) {
      if (checkForInvalidInputError(error)) {
        printInvalidInputMessage()
      }
    }
  } while (!collectedInformation.age)

  const roles = ['Read-only', 'Editor', 'Publisher']

  do {
    try {
      collectedInformation.role = await collector.getSingleChoiceInput('Choose your role:', roles)
    } catch (error) {
      if (checkForInvalidInputError(error)) {
        printInvalidInputMessage()
      }
    }
  } while (!collectedInformation.role)

  do {
    try {
      collectedInformation.password = await collector.getPasswordInput('Set your password:')
      const validatedPassword = await collector.getPasswordInput('Enter password again:')

      if (collectedInformation.password !== validatedPassword) {
        delete collectedInformation.password

        const passwordMatchError = new Error('Passwords do not match.')
        passwordMatchError.name = 'PasswordMatchError'
        throw passwordMatchError
      }
    } catch (error) {
      if (checkForInvalidInputError(error)) {
        printInvalidInputMessage()
      }

      if (error.name === 'PasswordMatchError') {
        console.log('Passwords do not match, try again...')
      }
    }
  } while (!collectedInformation.password)

  console.log(collectedInformation)
}

/**
 * Prints the error message on invalid input.
 */
function printInvalidInputMessage () {
  console.log('Invalid input, try again...')
}

/**
 * Checks the supplied error message for ValidationError.
 *
 * @param {Error} error - The error object.
 * @returns {boolean} - True if it is a ValidationError.
 */
function checkForInvalidInputError (error) {
  if (error.name === 'ValidationError') return true
}

start()
