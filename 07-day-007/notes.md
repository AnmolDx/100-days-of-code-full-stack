# Notes

## Border

used to set an element's border.

Shorthand property for setting border-width | style | color.

We can also control individual sides of the border. by border-top, border-right, border-bottom, border-left.

## Border Radius

Used to round the corners of an element's outer border edge.

These can also be control individually by border-top-right-radius, etc.

## Padding

space between content and border. We can also access each side with padding-top, padding-right, padding-bottom, padding-left.

Shorthand property to set values for the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.

- for all 4 sides - `padding: 50px`

- top & bottom | left & right - `padding: 1px 2px;`

- top | left & right | bottom - `padding: 1px 2px 3px;`

- top | right | bottom | left - `padding: 1px 2px 3px 4px;`

## Margin

To set spacing on the outside of border.

individual sides can access by margin-left, margin-right, margin-top, margin-bottom.

- for all 4 sides - `margin: 50px`

- top & bottom | left & right - `margin: 1px 2px;`

- top | left & right | bottom - `margin: 1px 2px 3px;`

- top | right | bottom | left - `margin: 1px 2px 3px 4px;`

## Display

it sets whether an element is treated as a block or inline element and the layout used for its children.

inline dont respect height, width, margin-top and bottom, and some other properties too. You can use inline-block display property so that css property can apply on them.

## Relative units

- % - It is often used to define a size as relative to an element's parent object.

- em - relative to parent or self.

- rem - relative to the root element.
