## Universal Selector

To select everything in a document, `*`(Asterisk) is used.

example - `*{
   background-color: aquamarine;
}`

## Element Selector

Select all element of the same type.

Example - `h3{
color: purple;
}`

## ID Selector

Selects an element based on the value of the element's id attribute.

Example - `#myid{
   property: value;
}`

## Class Selector

Selects an element based on their class attribute.

Example - `.myclass{
   property: value;
}`

## Descedant Selector

Eg - selects all paragraphs inside divs

`div p{
   property: value;
}`

## Adjacent Sibling Combinator

Eg - h3 that comes immediately after any paragraph.

`p + h3{
   property: value;
}`

## Child Combinator

Eg - Selects all buttons which are direct children of spans.

`span > button{
   property: value;
}`

## Attribute Selector

Selects elements based on the presence or value of given attribute.

`input[attr = "value"]{
   property: value;
}`