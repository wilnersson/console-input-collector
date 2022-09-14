/**
 * Module for unit testing of IntegerInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { IntegerInput } from '../src/IntegerInput.js'

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
