# Notes

## Functions In JS

`function funcName(){
    //code
}`

## Functions With Arguments

Arguments - value we pass to the function

`function funcName(arg1, arg2){
    //code
}`

## Return

return keyword is used to return some value from the function.

`function funcName(arg1, arg2..){
    //code
    return val;
}`

## Scope

Scope determines the accessibility of variables, objects, and functions from different parts.

- function scope - variables defined inside a function are not accessible(visible) from outside the function.

- block scope - variable declared insed a { } block cannot be accessed from outside the block.

- lexical scope - a variable defined outside a function an be accessible inside another function defined after the variable declaration.

## Function Expressions/Nameless Function

`const variable = function(arg1, arg2..){
    //do or return something
}`

## Higher Order Functions

A function that does one or both:

- takes one or multiple functions as arguments.

- returns a function
