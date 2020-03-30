DROP TABLE IF EXISTS flight;
DROP TABLE IF EXISTS airport;


CREATE TABLE airport (
                         id INT AUTO_INCREMENT PRIMARY KEY,
                         name VARCHAR(250) NOT NULL,
                         city VARCHAR(250) NOT NULL
);

CREATE TABLE flight (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        origin_id INT NOT NULL,
                        destination_id INT NOT NULL,
                        departure DATETIME NOT NULL,
                        arrival DATETIME NOT NULL,
                        CONSTRAINT fk_origin_id FOREIGN KEY(origin_id) REFERENCES airport(id),
                        CONSTRAINT fk_destination_id FOREIGN KEY(destination_id) REFERENCES airport(id)
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

INSERT INTO flight (origin_id, destination_id, departure, arrival) VALUES
    (1, 2, parsedatetime('17-09-2020 23:05', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 00:30', 'dd-MM-yyyy hh:mm')),
    (1, 2, parsedatetime('18-09-2020 18:47', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 19:47', 'dd-MM-yyyy hh:mm')),
    (1, 2, parsedatetime('17-09-2020 6:30', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 7:20', 'dd-MM-yyyy hh:mm')),
    (1, 2, parsedatetime('17-09-2020 15:05', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 16:30', 'dd-MM-yyyy hh:mm')),

    (11, 3, parsedatetime('17-09-2020 23:05', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 00:30', 'dd-MM-yyyy hh:mm')),
    (11, 3, parsedatetime('18-09-2020 18:47', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 19:47', 'dd-MM-yyyy hh:mm')),
    (11, 3, parsedatetime('17-09-2020 6:30', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 7:20', 'dd-MM-yyyy hh:mm')),
    (11, 3, parsedatetime('17-09-2020 15:05', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 16:30', 'dd-MM-yyyy hh:mm')),

    (5, 7, parsedatetime('17-09-2012 18:47', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2012 19:47', 'dd-MM-yyyy hh:mm'));
