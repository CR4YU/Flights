drop schema if exists flights_schema cascade;
create schema flights_schema;
set schema flights_schema;

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
                        ticket_price DOUBLE NOT NULL,
                        currency VARCHAR(10) NOT NULL,
                        num_seats_columns INT NOT NULL,
                        num_seats_rows INT NOT NULL,
                        taken_seats VARCHAR(500),
                        CONSTRAINT fk_flight_origin_id FOREIGN KEY(origin_id) REFERENCES airport(id),
                        CONSTRAINT fk_flight_destination_id FOREIGN KEY(destination_id) REFERENCES airport(id)
);

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL
);

CREATE TABLE booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    flight_id INT NOT NULL,
    seats VARCHAR(250) NOT NULL,
    CONSTRAINT fk_booking_user_id FOREIGN KEY(user_id) REFERENCES user(id),
    CONSTRAINT fk_booking_flight_id FOREIGN KEY(flight_id) REFERENCES flight(id)
);

-- CREATE TABLE seat (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     code VARCHAR(4) NOT NULL,
--     flight_id INT NOT NULL,
--     booking_id INT,
--     CONSTRAINT fk_seat_booking_id FOREIGN KEY(booking_id) REFERENCES booking(id),
--     CONSTRAINT fk_seat_flight_id FOREIGN KEY(flight_id) REFERENCES flight(id)
-- );

INSERT INTO user (first_name, last_name) VALUES
    ('John', 'Rambo');


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

INSERT INTO flight (origin_id, destination_id, departure, arrival, ticket_price, currency, num_seats_columns, num_seats_rows, taken_seats) VALUES
    (1, 2, parsedatetime('17-09-2020 23:05', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 00:30', 'dd-MM-yyyy hh:mm'), 10.00, 'EUR', 6, 10, '2B,3C'),
    (1, 2, parsedatetime('18-09-2020 18:47', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 19:47', 'dd-MM-yyyy hh:mm'), 9.00, 'EUR', 6, 10, '2B,3C'),
    (1, 2, parsedatetime('17-09-2020 6:30', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 7:20', 'dd-MM-yyyy hh:mm'), 11.00, 'EUR', 6, 10, '2B,3C'),
    (1, 2, parsedatetime('17-09-2020 15:05', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 16:30', 'dd-MM-yyyy hh:mm'), 10.00, 'EUR', 6, 10, '2B,3C'),

    (11, 3, parsedatetime('17-09-2020 23:05', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 00:30', 'dd-MM-yyyy hh:mm'), 10.00, 'EUR', 4, 8, '2B,3C'),
    (11, 3, parsedatetime('18-09-2020 18:47', 'dd-MM-yyyy hh:mm'), parsedatetime('18-09-2020 19:47', 'dd-MM-yyyy hh:mm'), 10.00, 'EUR', 6, 10, '2B,3C'),
    (11, 3, parsedatetime('17-09-2020 6:30', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 7:20', 'dd-MM-yyyy hh:mm'), 10.00, 'EUR', 6, 10, '2B,3C'),
    (11, 3, parsedatetime('17-09-2020 15:05', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2020 16:30', 'dd-MM-yyyy hh:mm'), 10.00, 'EUR', 6, 10, '2B,3C'),

    (5, 14, parsedatetime('17-09-2012 18:47', 'dd-MM-yyyy hh:mm'), parsedatetime('17-09-2012 19:47', 'dd-MM-yyyy hh:mm'), 10.00, 'EUR', 6, 10, '2B,3C');
