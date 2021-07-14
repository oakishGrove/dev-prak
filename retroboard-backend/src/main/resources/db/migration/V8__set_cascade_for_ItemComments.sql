ALTER TABLE item_comment
DROP CONSTRAINT item_comment_item_id_fkey;

ALTER TABLE item_comment
ADD CONSTRAINT item_comment_item_id_fkey
FOREIGN KEY (ITEM_ID)
REFERENCES column_item (ID)
ON DELETE CASCADE;