CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMaRY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(1000),
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks(title, description) VALUES ("task 1","Description 1" );