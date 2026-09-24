CREATE DATABASE IF NOT EXISTS studentInfo;

USE studentInfo;

CREATE TABLE student(
	roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110, "adam", "delhi", 76),
(108, "bob", "mumbai", 65),
(124, "casey", "pune", 94),
(112, "duke", "pune", 80);

SELECT * FROM student;

SELECT * FROM student
WHERE marks > 75;

SELECT city, max(marks) FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "0"
WHERE marks > 80;

UPDATE student
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student
SET grade = "B"
WHERE marks >= 60 AND marks < 70;

SELECT * FROM student;










