DROP TABLE IF EXISTS airport;

CREATE TABLE airport (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  city VARCHAR(250) NOT NULL
);

INSERT INTO airport (name, city) VALUES
    ('London Stansted', 'London'),
    ('Warsaw Modlin', 'Warsaw'),
    ('Berlin Tegel', 'Berlin'),
    ('Warsaw Chopin', 'Warsaw'),
    ('Krakow', 'Krakow'),
    ('Gdansk Lech Walesa', 'Gdansk'),
    ('Katowice', 'Katowice'),
    ('Wroclaw', 'Wroclaw'),
    ('Poznan', 'Poznan'),
    ('Rzeszow International', 'Rzeszow'),
    ('"Solidarity" Szczecin-Goleniow', 'Szczecin'),
    ('Bydgoszcz', 'Bydgoszcz'),
    ('Lublin', 'Lublin'),
    ('Lodz', 'Lodz'),
    ('Olsztyn-Mazury', 'Olsztyn'),
    ('Zielona Gora', 'Zielona Gora');