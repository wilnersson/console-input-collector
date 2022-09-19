/**
 * The main starting point for the test-application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import collector from '../src/index.js'

/**
 * Starts the test-application.
 *
 * This is a very simple application that tests the terminal-input-collector package.
 * It simply asks for input in different ways and finally prints the result.
 * Please do not share your actual password or information with this application.
 */
async function start () {
  const collectedInformation = {}

  do {
    try {
      collectedInformation.firstName = await collector.getStringInput('Please enter your first name:', 100)
    } catch (error) {
      if (checkForInvalidInputError(error)) {
        printInvalidInputMessage()
      }
    }
  } while (!collectedInformation.firstName)

  do {
    try {
      collectedInformation.lastName = await collector.getStringInput('Please enter your last name:', 100)
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
      collectedInformation.password = await collector.getPasswordInput('Set your password:', 8, 1000)
      const validatedPassword = await collector.getPasswordInput('Enter password again:', 8, 1000)

      if (collectedInformation.password !== validatedPassword) {
        const passwordMatchError = new Error('Passwords do not match.')
        passwordMatchError.name = 'PasswordMatchError'
        throw passwordMatchError
      }
    } catch (error) {
      if (checkForInvalidInputError(error)) {
        printInvalidPasswordMessage()
      }

      if (error.name === 'PasswordMatchError') {
        console.log('Passwords do not match, try again...')
      }

      delete collectedInformation.password
    }
  } while (!collectedInformation.password)

  console.log('\n --- Thank you, this was the result ---')
  console.log(collectedInformation)
}

/**
 * Prints the error message on invalid input.
 */
function printInvalidInputMessage () {
  console.log('Invalid input, try again...')
}

/**
 * Prints the error message on invalid password input.
 */
function printInvalidPasswordMessage () {
  console.log('Invalid input. Password must be at least 8 characters, at most 1000 characters.')
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
