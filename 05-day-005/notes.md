## What is CSS?

It is language that is used to describe the style of a document.

If HTML is skeleton, CSS is body of it.

## How to Include Styles?

- Inline Styles - writing style directly inline on each element.

Example - `<h1 style="color: rgb(29, 151, 251);">Anmol</h1>`

- Using `<style>` tag - Style is added using the `<style>` element in the same document.

Example - `<style>
      h1{
         color: red;
      }
   </style>`

- External Stylesheet - Writing CSS in a seperate document \& linking it with HTML file.

You can link it by writing `<link rel="stylesheet" href="style.css">` in head tag of your HTML document.

## Color System

- Named Colors - Each browser recognizes around 140 named colors.

-RGB - Red Green Blue (0-255) `color = rgb(0,0,0)`

- Hexadecimal or Hex - `color = #ffffff`

Letters: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

## Text Align Property

It align the text according to parent element.

## Font-weight

It can be normal(400)/bold(700)/light/100-900.

## Text-decoration

sets the apprearance of decorative lines on text like underline.

text-decoration: underline/overline/line-through

## line-height

controls the height of the line of text.

## letter-spacing

controls the horizontal spacing behavior between text characters.

## Units in CSS

Absolute = Fixed, px,pc,pt,cm,mm,in

1in = 96px

Relative = Related to other relation's value. %,em,rem,vh,vw

## font-family

specifies a priortized list of one or more font family names
