# Notes

## DOM(Document Object Model)

The DOM represents a document with a logical tree.

It allows us to manipulate/change webpage content (HTML elements).

## Selecting Elements

- `getElementById(id)` - Returns the element as an object or null (if not found).

- `getElementByClassName(class)` - Retrurns the elements as an HTML collection or empty collection (if not found).

- `getElementByTagName` - Returns the Elements as an HTML Collection or empty collection (if not found).

## Query Selectors

Allows us to use any CSS selector

`document.querySelector("p")` - selects first p element

`document.querySelector("#myId")` - selects first element with id = myId.

`document.querySelector(".myClass")` - selects first element with class = myClass.

`document.querySelectorAll("p")` - selects all p elements. gives node list

## Properties & Methods

- `innerText` - shows the visible text contained in a node.

- `textContent` - shows all the full text.

- `innerHTML` - shows the full markup.

## Manipulating Style

### using classList

- `classList.add()` to add new classes

- `classList.remove()` to remove classes

- `classList.contains()` to check if class exists

- `classList.toggle()` to toggle between add & remove

