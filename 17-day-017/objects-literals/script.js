let student = {
    name: "Anmol",
    age: 20,
    marks: 99.9
}

//practice question

// create object literal for properties of twitter post
const post = {
    username: "techwalaguy",
    content: "today i learned about object literals",
    like: 0,
    reposts: 0,
    hashtags: ["#100daysofcode", "#webdev", "#javaScript"]
}

post.like = 5;
post.shares = 2
delete post.reposts
console.log(post)