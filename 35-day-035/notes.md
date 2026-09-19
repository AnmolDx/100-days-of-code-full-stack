# Notes

## What is a Database?

It is a collection of data in a format that can be easily accessed.

- can store large data

- features like security, scalability etc.

- Easier to insert, update, search or delete data

## SQL vs NoSQL

### SQL

Relational Database (data stored in Tables)

eg - MySQL, Oracle, PostgreSQL etc.

### NoSQL

Non Relational Database (data stored in document/key-val/graphs etc.)

eg - MongoDb, Cassandra, Neo4j etc.

## SQL (Structured Query Language)

SQL is a programming language used to interact with relational databases.

`CREATE DATABASE db_name;` - create new database

`CREATE DATABASE IF NOT EXISTS db_name;` - create new database if not exists

`DROP DATABASE db_name;` - to delete database

`DROP DATABASE IF EXISTS db_name;` - to delete database if exists

`SHOW DATABASE;` - to show all database

`SHOW TABLES;` - to show all tables of a database

`USE db_name;` - to use database

```sql
CREATE TABLE table_name(
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint,
)
```

datatype - string, integer, etc.

constraint - rules(optional)
