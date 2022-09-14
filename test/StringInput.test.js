/**
 * Module for unit testing of StringInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { StringInput } from '../src/StringInput.js'

describe('StringInput', () => {
  test('Supplying "Hello World!" should return the same string.', () => {
    const stringInput = new StringInput('Hello World!')
    expect(stringInput.getInput()).toBe('Hello World!')
  })

  test('Any string without maxAnswerLength should be valid.', () => {
    const stringInput = new StringInput('Hello World again!')
    expect(stringInput.isValid()).toBe(true)
  })

  test('A string longer than maxAnswerLength should be invalid.', () => {
    const stringInput = new StringInput('A much too long string', 5)
    expect(stringInput.isValid()).toBe(false)
  })

  test('A string as a maxLength parameter should throw a RangeError.', () => {
    expect(() => new StringInput('Hello World!', 'notanumber')).toThrow(RangeError)
  })
})
