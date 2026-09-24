CREATE DATABASE college;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user(
	id INT PRIMARY KEY,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    constraint CHECK (age >= 13)
);

CREATE TABLE post(
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 69, 70),
(2, 15, "bob", "bob123@yahoo.in", 12, 24),
(3, 16, "casey", "casey@gmail.com", 300, 323),
(4, 17, "donald", "donald@gmail.com", 200, 150);

SELECT * FROM user WHERE age BETWEEN 15 AND 17;

SELECT * FROM user WHERE email IN("adam@yahoo.in","donald@gmail.com", "bruhh111@gmail.com");

SELECT * FROM user WHERE age > 14 LIMIT 2;

SELECT * FROM user ORDER BY followers DESC;

SELECT count(name) FROM user WHERE age > 15;

SELECT age, max(followers) FROM user GROUP BY age HAVING max(followers) >= 200;

SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET followers = 600
WHERE age = 16;

DELETE FROM user
WHERE age = 14;

select * from user;

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

ALTER TABLE user
DROP COLUMN age;

ALTER TABLE user
RENAME TO instaUser;

SELECT * FROM instaUser;

ALTER TABLE instaUser
RENAME TO user;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT * FROM user;

ALTER TABLE user
MODIFY subs INT DEFAULT 5;










