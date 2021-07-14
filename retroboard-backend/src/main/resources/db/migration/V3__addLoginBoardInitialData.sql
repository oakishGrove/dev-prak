ALTER TABLE auth_user
ALTER COLUMN is_active type BOOLEAN USING CASE WHEN is_active = B'1' THEN true ELSE false END, 
ALTER COLUMN is_non_locked type BOOLEAN USING CASE WHEN is_active = B'1' THEN true ELSE false END; 

INSERT INTO auth_user (auth_user_id, is_active, is_non_locked,  name, note,  password, username) VALUES (1, TRUE, TRUE, 'NAME1', 'USER', '$2a$10$UuoMK7ZgzPzKdPxC1dIVYufI/UhAZDp540K6sgtAwLFnV4tozQMwK', 'neo@neo.neo');
INSERT INTO auth_user (auth_user_id, is_active, is_non_locked,  name, note,  password, username) VALUES (3, TRUE, TRUE, 'NAME2', 'ADMIN', '$2a$10$5aOXBkxDCgghsUYAqG1jd.hk1IXOe18BkBIxmLHlI9fEW2adIMDb2', 'jhonny@silver.head');

INSERT INTO auth_role (id, role, auth_user_id) VALUES (2, 'ROLE_USER', 1);
INSERT INTO auth_role (id, role, auth_user_id) VALUES (4, 'ROLE_USER', 3);
INSERT INTO auth_role (id, role, auth_user_id) VALUES (5, 'ROLE_USER', 3);

INSERT INTO board (id, date_created, name, auth_user_id) VALUES (1, '2020-11-11', 'board No.1', 1);
INSERT INTO board (id, date_created, name, auth_user_id) VALUES (2, '2020-11-12', 'board No.2', 3);
