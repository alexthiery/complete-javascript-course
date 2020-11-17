#!/usr/local/bin/node
// ternary operator - alternative to ifelse and switch

const age = 23;

const temp = age >= 18 ? 'wine' : 'water'

console.log(temp)


//  ${} takes an expression. because the ternary operator is an expression which returns a value, so this can be passed to ${}
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)