create TABLE IF NOT EXISTS board_column (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR,
    COLOR VARCHAR,
    BOARD_ID INT NOT NULL,
    FOREIGN KEY (BOARD_ID) REFERENCES board(ID)
);


create TABLE IF NOT EXISTS column_item (
    ID SERIAL PRIMARY KEY,
    TEXT VARCHAR,
    VOTE_COUNT INT,
    COLUMN_ID INT NOT NULL,
    FOREIGN KEY (COLUMN_ID) REFERENCES board_column(ID)
);

INSERT INTO board_column (NAME, COLOR, BOARD_ID) VALUES ('Went Well', '#3BA59E', 1);
INSERT INTO board_column (NAME, COLOR, BOARD_ID) VALUES ('To Improve', '#D57392', 1);
INSERT INTO board_column (NAME, COLOR, BOARD_ID) VALUES ('Action Items', '#4F71A9', 1);

INSERT INTO board_column (NAME, COLOR, BOARD_ID) VALUES ('Went Well', '#3BA59E', 2);
INSERT INTO board_column (NAME, COLOR, BOARD_ID) VALUES ('To Improve', '#D57392', 2);
INSERT INTO board_column (NAME, COLOR, BOARD_ID) VALUES ('Action Items', '#4F71A9', 2);
