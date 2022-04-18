create TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    groupname VARCHAR(255),
    created VARCHAR(255)
);


create TABLE groups(
    id SERIAL PRIMARY KEY,
    groupname VARCHAR(255),
    groupdescription VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

