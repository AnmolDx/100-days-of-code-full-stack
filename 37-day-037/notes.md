# Notes

## Clause

### Where

To define some conditions

`SELECT col1, col2 FROM table_name WHERE conditions;`

### Frequently Used operators

- AND(check for both condition to be true)

- OR(check for one of the condition to be true)

- BETWEEN(selects for a given range)

- IN(matches any value in the list)

- NOT(to negate the given condition)

## Limit

sets an upper limit on number of (tuples) rows to be returned

`SELECT col1, col2 FROM table_name LIMIT number;`

## Order by

to sort in ascending(ASC) or decending order(DESC)

`SELECT col1, col2 FROM table_name ORDER BY col_name(s) ASC;`

## Aggregate functions

aggregate functions perform a calculation on a set of values, and return a single value.
