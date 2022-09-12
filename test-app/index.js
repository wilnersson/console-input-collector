/**
 * The main starting point for the test-application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { collector } from '../src/index.js'

const todaysMood = await collector.getStringInput('How are you today?')

console.log(`Your mood today is: ${todaysMood}`)

const usersName = await collector.getStringInput('What is your name?')

console.log(`Nice to meet you ${usersName}`)
