/**
 * Module for unit testing.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { StringInput } from '../src/StringInput.js'
import { IntegerInput } from '../src/IntegerInput.js'

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

describe('IntegerInput', () => {
  test('Supplying 35 should return the same number.', () => {
    const integerInput = new IntegerInput(35)
    expect(integerInput.getInput()).toBe(35)
  })

  test('A string should be invalid.', () => {
    const integerInput = new IntegerInput('Hello World!')
    expect(integerInput.isValid()).toBe(false)
  })

  test('A number outside the supplied range should be invalid.', () => {
    const integerInput = new IntegerInput(35, 1, 34)
    expect(integerInput.isValid()).toBe(false)
  })

  test('Supplying a null minValue should work and mean no lower limit to the input value.', () => {
    const integerInput = new IntegerInput(-9999999, null, 0)
    expect(integerInput.isValid()).toBe(true)
  })

  test('Supplying a minValue larger than maxValue should throw an Error.', () => {
    expect(() => new IntegerInput(35, 100, 1)).toThrow(Error)
  })

  test('Supplying a string as a maxValue parameter should throw a TypeError.', () => {
    expect(() => new IntegerInput(1000000000, 0, 'Hello World!')).toThrow(TypeError)
  })
})
