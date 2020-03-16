DROP TABLE IF EXISTS airport;

CREATE TABLE airport (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  city VARCHAR(250) NOT NULL
);

INSERT INTO airport (name, city) VALUES
  ('London Stansted', 'London'),
  ('Warsaw Modlin', 'Warsaw');