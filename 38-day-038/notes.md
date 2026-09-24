# Notes

## Group by

Group rows that have the same values into summary rows.

It collects data from multiple records and group the result by one or more column.

## Having

Similar to where i.e. applies some condition on rows.

But it is used when we want to apply any condition after grouping.

## Table queries

### Update

to update existing rows

```sql
UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;
```

### Delete

to delete existing rows

```sql
DELETE FROM table_name
WHERE condition;
```

### Alter

to change the schema(kinda columns)

#### Add column

```sql
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;
```

#### Drop column

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

#### Rename Table

```sql
ALTER TABLE table_name
RENAME TO new_table_name;
```

#### Change column(rename)

```sql
ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constraint;
```

#### Modify column(modify datatype/constraint)

```sql
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;
```

### Truncate

to delete table's data

```sql
TRUNCATE TABLE table_name;
```
