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
