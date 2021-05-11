DROP DATABASE IF EXISTS uhuu;
CREATE DATABASE IF NOT EXISTS uhuu;

DROP TABLE IF EXISTS contact_type;
CREATE TABLE IF NOT EXISTS contact_type (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(80) NOT NULL,
);

DROP TABLE IF EXISTS contact;
CREATE TABLE IF NOT EXISTS contact (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    contact_type_id INT UNSIGNED NOT NULL,
    value VARCHAR(80) NOT NULL,
    FOREIGN KEY (contact_type_id) REFERENCES contact_type(id)
);

DROP TABLE IF EXISTS address;
CREATE TABLE IF NOT EXISTS address (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(40) NOT NULL,
    CEP VARCHAR(11) NOT NULL,
    street VARCHAR(40) NOT NULL,
    number VARCHAR(5) NOT NULL,
    additional_adress VARCHAR(20) NULL,
    district VARCHAR(40) NOT NULL
)

DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    address_id INT UNSIGNED NOT NULL,
    contact_id INT UNSIGNED NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    rg VARCHAR(9) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    username VARCHAR(60) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    FOREIGN KEY (contact_id) REFERENCES contacts(id),
    FOREIGN KEY (address_id) REFERENCES address(id)
);

DROP TABLE IF EXISTS events;
CREATE TABLE IF NOT EXISTS events (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    client_id INT UNSIGNED NOT NULL,
    event_date DATE NOT NULL,
    starting_hour TIME NOT NULL,
    finishing_hour TIME NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id)
)

DROP TABLE IF EXISTS guests;
CREATE TABLE IF NOT EXISTS guests (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    client_id INT UNSIGNED NOT NULL,
    event_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (event_id) REFERENCES events(id)
);

DROP TABLE IF EXISTS service_type;
CREATE TABLE IF NOT EXISTS service_type (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(80) NOT NULL
);

DROP TABLE IF EXISTS providers;
CREATE TABLE IF NOT EXISTS providers (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    contact_id INT UNSIGNED NOT NULL,
    service_type_id INT UNSIGNED NOT NULL,
    name VARCHAR(60) NOT NULL,
    CNPJ VARCHAR(14) NOT NULL UNIQUE,
    opening_hour TIME NOT NULL,
    closing_hour TIME NOT NULL,
    FOREIGN KEY (contact_id) REFERENCES contacts(id),
    FOREIGN KEY (service_type_id) REFERENCES service_type(id)
);

DROP TABLE IF EXISTS contracts;
CREATE TABLE IF NOT EXISTS contracts (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    events_id INT UNSIGNED NOT NULL,
    client_id INT UNSIGNED NOT NULL,
    provider_id INT UNSIGNED NOT NULL,
    event_date DATE ,
    opening_hour TIME NOT NULL,
    appointment_hour TIME NOT NULL,
    FOREIGN KEY (events_id) REFERENCES events(id)
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (provider_id) REFERENCES providers(id),
);



[x] contratos
[x] fornecedores
[x] tipo servico
[] salao
[] mesas
[] cadeiras
