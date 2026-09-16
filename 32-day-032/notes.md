# Notes

## Get & Post Requests

### Get

used to get some reponse

Data sent in query strings(limited, string data & visible in URL)

### Post

Used to Post something(for create/write/update)

Data sent via request body (any type of data)

### Handling Post requests

set up POST request route to get some response

Parse POST request data

`app.use(express.urlencoded({extended: true}));`

`app.use(express.json());`

## Object Prototypes

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

Its is like a single template object that all objects inherit methods and properties from without having their own copy.

## New operator

The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

## Classes

Classes are a template for creating objects

The constructor method is a special method of a class for creating and initializing an object instance of that class.

## Inheritance

Inheritance is a mechanism that allow us to create new classes on the basis of already existing classes.
