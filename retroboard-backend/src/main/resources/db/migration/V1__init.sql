create TABLE IF NOT EXISTS auth_user (
    auth_user_id INT PRIMARY KEY,
    is_active bit,
    is_non_locked bit,
    name varchar,
    note varchar,
    password varchar,
    username varchar
);

create TABLE IF NOT EXISTS auth_role (
    ID  INT PRIMARY KEY,
    ROLE VARCHAR,
    AUTH_USER_ID int,
    FOREIGN KEY (AUTH_USER_ID) REFERENCES auth_user(auth_user_id)
);
