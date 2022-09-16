/**
 * Module for unit testing of SingleInputChoice class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { SingleChoiceInput } from '../src/SingleChoiceInput'

describe('SingleChoiceInput', () => {
  test('Supplying an answer in range should result in a valid answer.', () => {
    const singleChoiceInput = new SingleChoiceInput(['a', 'b', 'c'])
    singleChoiceInput.setUserChoice(2)
    expect(singleChoiceInput.isValid()).toBe(true)
  })

  test('Supplying an answer out of range should result in an invalid answer.', () => {
    const singleChoiceInput = new SingleChoiceInput(['a', 'b', 'c'])
    singleChoiceInput.setUserChoice(4)
    expect(singleChoiceInput.isValid()).toBe(false)
  })

  test('Calling the user choice getter should return the answer in an object.', () => {
    const singleChoiceInput = new SingleChoiceInput(['a', 'b', 'c'])
    singleChoiceInput.setUserChoice(2)
    expect(singleChoiceInput.getUserChoice().choiceNumber).toBe(2)
  })

  test('Calling the render text getter should return a string at least as long as the supplied answers.', () => {
    const singleChoiceInput = new SingleChoiceInput(['abc', 'bcd', 'cde'])
    expect(singleChoiceInput.getRenderText().length).toBeGreaterThan(9)
  })

  test('Supplying an answer that is not a number should result in an invalid answer.', () => {
    const singleChoiceInput = new SingleChoiceInput(['a', 'b', 'c'])
    singleChoiceInput.setUserChoice('notanumber')
    expect(singleChoiceInput.isValid()).toBe(false)
  })

  test('Not supplying an array of strings in the constructor should throw a TypeError.', () => {
    expect(() => new SingleChoiceInput([1, '2', 'c'])).toThrow(TypeError)
  })
})
