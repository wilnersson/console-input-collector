/**
 * Module for unit testing of MultipleChoiceInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { MultipleChoiceInput } from '../src/MultipleChoiceInput.js'

describe('MultipleChoiceInput', () => {
  test('Supplying an answer in range should result in a valid answer.', () => {
    const multipleChoiceInput = new MultipleChoiceInput(['a', 'b', 'c'])
    multipleChoiceInput.setUserChoice('2')
    expect(multipleChoiceInput.isValid()).toBe(true)
  })

  test('Supplying an answer out of range should result in an invalid answer.', () => {
    const multipleChoiceInput = new MultipleChoiceInput(['a', 'b', 'c'])
    multipleChoiceInput.setUserChoice('4')
    expect(multipleChoiceInput.isValid()).toBe(false)
  })

  test('Calling the user choice getter should return the answer in an array of objects.', () => {
    const multipleChoiceInput = new MultipleChoiceInput(['a', 'b', 'c'])
    multipleChoiceInput.setUserChoice('2')
    expect(multipleChoiceInput.getUserChoice()[0].choiceNumber).toBe(2)
  })

  test('Calling the user choice getter should return all the answers in an array of objects.', () => {
    const multipleChoiceInput = new MultipleChoiceInput(['a', 'b', 'c'])
    multipleChoiceInput.setUserChoice('1 2')
    expect(multipleChoiceInput.getUserChoice()[1].choiceNumber).toBe(2)
  })

  test('Calling the render text getter should return a string at least as long as the supplied answers.', () => {
    const multipleChoiceInput = new MultipleChoiceInput(['abc', 'bcd', 'cde'])
    expect(multipleChoiceInput.getRenderText().length).toBeGreaterThan(9)
  })

  test('Supplying an answer that is not a number should result in an invalid answer.', () => {
    const multipleChoiceInput = new MultipleChoiceInput(['a', 'b', 'c'])
    multipleChoiceInput.setUserChoice('notanumber')
    expect(multipleChoiceInput.isValid()).toBe(false)
  })

  test('Not supplying an array of strings in the constructor should throw a TypeError.', () => {
    expect(() => new MultipleChoiceInput([1, '2', 'c'])).toThrow(TypeError)
  })
})
