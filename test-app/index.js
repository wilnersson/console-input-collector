/**
 * The main starting point for the test-application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { getStringInput } from '../src/index.js'

const todaysMood = await getStringInput('How are you today?')

console.log(`Your mood today is: ${todaysMood}`)
