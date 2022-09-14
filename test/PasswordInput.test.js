/**
 * Module for unit testing of PasswordInput class.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { PasswordInput } from '../src/PasswordInput.js'

describe('PasswordInput', () => {
  test('Supplying "unsafepassword" should return the same string.', () => {
    const passwordInput = new PasswordInput('unsafepassword')
    expect(passwordInput.getInput()).toBe('unsafepassword')
  })

  test('Any password without min or max lenght should be valid.', () => {
    const passwordInput = new PasswordInput('anystringatall')
    expect(passwordInput.isValid()).toBe(true)
  })

  test('A password shorter than minLength should be invalid.', () => {
    const passwordInput = new PasswordInput('ab12', 8)
    expect(passwordInput.isValid()).toBe(false)
  })

  test('A password longer than maxLength should be invalid.', () => {
    const passwordInput = new PasswordInput('alittlelongerpassword', null, 10)
    expect(passwordInput.isValid()).toBe(false)
  })

  test('A string as a minLength parameter should throw a RangeError.', () => {
    expect(() => new PasswordInput('unsafepassword', 'notanumber')).toThrow(RangeError)
  })

  test('A string as a maxLength parameter should throw a RangeError.', () => {
    expect(() => new PasswordInput('unsafepassword', null, 'notanumber')).toThrow(RangeError)
  })
})
