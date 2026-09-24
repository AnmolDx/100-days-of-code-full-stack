CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE teacher(
	id INT,
    name VARCHAR(50),
    subject VARCHAR(30),
    salary INT
);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

UPDATE teacher
SET ctc = ctc + ctc*0.25;

ALTER TABLE teacher
ADD COLUMN city varchar(50) DEFAULT "gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;






