const { faker } = require('@faker-js/faker');
const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'some_app',
  password: '1234'
});

//inserting new data
let q = "INSERT INTO user(id, username, email, password) VALUES ?";
let users = [
    ["123a", "123_newusera", "abc@gmail.coma", "abca"],
    ["123b", "123_newuserb", "abc@gmail.comb", "abcb"]
];


try{
    connection.query(q, [users], (err, result) => {
        if(err) throw err
        console.log(result);
})
}catch(err){
    console.log(err)
}

connection.end()

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
}
