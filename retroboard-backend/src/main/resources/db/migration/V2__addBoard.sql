create TABLE IF NOT EXISTS board (
    ID  INT PRIMARY KEY,
    DATE_CREATED date,
    NAME VARCHAR,
    AUTH_USER_ID int,
    FOREIGN KEY (AUTH_USER_ID) REFERENCES auth_user(auth_user_id)
);
