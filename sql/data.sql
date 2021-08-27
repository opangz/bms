PRAGMA foreign_keys = ON;

INSERT INTO category (category) VALUES ('startup');
INSERT INTO category (category) VALUES ('food');
INSERT INTO category (category) VALUES ('hygiene');

INSERT INTO sub_category (sub_category, cat_id) VALUES ('kitchen', 1);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('carbohydrate', 2);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('protein', 2);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('dairy', 2);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('vegetable', 2);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('fruit', 2);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('snack', 2);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('seasoning', 2);
INSERT INTO sub_category (sub_category, cat_id) VALUES ('skincare', 3);

INSERT INTO item (item, sub_cat_id, pretax_price, tax, price, date)
VALUES ('pasta', 2, 4.02, 0.00, 4.02, '2021-05-17');

INSERT INTO item (item, sub_cat_id, pretax_price, tax, price, date)
VALUES ('bread', 2, 2.18, 0.00, 2.18, '2021-05-17');

INSERT INTO item (item, sub_cat_id, pretax_price, tax, price, date)
VALUES ('lotion', 9, 5.73, 0.40, 6.13, '2021-05-22');