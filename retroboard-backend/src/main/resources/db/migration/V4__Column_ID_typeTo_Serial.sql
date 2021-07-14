CREATE SEQUENCE auth_role_id_seq START WITH 100;
ALTER TABLE auth_role ALTER COLUMN id SET DEFAULT nextval('auth_role_id_seq');
ALTER SEQUENCE auth_role_id_seq OWNED BY auth_role.id;

CREATE SEQUENCE auth_user_auth_user_id_seq START WITH 100;
ALTER TABLE auth_user ALTER COLUMN auth_user_id SET DEFAULT nextval('auth_user_auth_user_id_seq');
ALTER SEQUENCE auth_user_auth_user_id_seq OWNED BY auth_user.auth_user_id;

CREATE SEQUENCE board_id_seq START WITH 100;
ALTER TABLE board ALTER COLUMN id SET DEFAULT nextval('board_id_seq');
ALTER SEQUENCE board_id_seq OWNED BY board.id;