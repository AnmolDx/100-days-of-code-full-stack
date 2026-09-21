# Notes

## Data Types

- CHAR - string(0-255) can store characters of fixed length

- VARCHAR - string(0-255) can store characters up to given length

- INT

## Constraints

Rules for data in the table

- `NOT NULL` - columns cannot have a null value

- `UNIQUE` - all values in column are different

- `DEFAULT` - sets the default value of a column

- `CHECK` - it can limit the values allowed in a column

- `PRIMARY KEY` - makes a column unique & not null but used ony for one

- `FOREIGN KEY` - prevent actions that would destroy links between tables

## What are Keys?

Keys are special columns in the table

### Primary Key

It is a column(or set of columns) in a table that uniquely identifies each row. (a unique id)

There is only 1 primary key & it should be NOT null.

### Foreign Key

A foreign key is a column (or set of columns) in a table that refers to the primary key in another table.

Foreign key can have duplicate & null values.

There can be multiple Foreign keys.

## Table Queries

```sql
INSERT INTO table_name
(colname1, colname2);
VALUES
(col1_v1, col2_v1),
(col1_v2, col2_v2);
```

## Select Command

Selects & Show data from the Database

`SELECT col1, col2 FROM table_name;`

Syntax (to show all)

`SELECT * FROM table_name;`
