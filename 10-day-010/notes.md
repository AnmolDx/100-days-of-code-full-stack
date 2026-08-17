# Notes

## Grid

Setting a container's display to grid will make all children grid items.

## Grid Template

They define the lines & track sizing.

## Grid Template (repeat)

Repeat is used to divide all available space.

`grid-template-rows: repeat(count, 1fr)` (1 fraction of 100%)

## Grid Gaps

They define the gaps between the lines.

`row-gap`, `column-gap`, `grid-gap: rowGap columnGap`

## Grid Columns

Define an item's starting & ending position inside the column.

`grid-column-start: line_number`, `grid-column-end: line_number`

`grid-column: start_col/end_col`, `grid-column: start_col/ span number`

## Grid Rows

Define an item's starting & ending position inside the row.

`grid-row-start: line_number`, `grid-row-end: line_number`

`grid-row: start_col/end_col`, `grid-row: start_col/ span number`

## Common Properties

`justify-items` (container) - horizontal

`justify-self` (item) - horizontal

`align-items` (container) - vertical

`align-self` (item) - vertical

`place-items` (container) - both horizontal and vertical

`place-self` (item) - both horizontal and vertical

## CSS Animations

to animate CSS elements.

`@keyframes myName {
    from{font-size: 20px;}
    to{font-size: 40px;}
}`

- `animation-name`

- `animation-duration`

- `animation-timing-function`

- `animation-delay`

- `animation-iteration-count`

- `animation-direction`

## Animation Shorthand

`animation: myName | duration | timing-funtion | delay | iteration | direction`

## % in Animation

`@keyframes myName {
    0%{font-size: 20px;}
    50%{font-size: 30px;}
    100%{font-size: 40px}
}`