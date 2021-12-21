PRAGMA foreign_keys = ON;

INSERT INTO category (category) VALUES ('startup');
INSERT INTO category (category) VALUES ('food');
INSERT INTO category (category) VALUES ('hygiene');

INSERT INTO subcategory (subcategory, cat_id) VALUES ('kitchen', 1);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('carbohydrate', 2);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('protein', 2);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('dairy', 2);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('vegetable', 2);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('fruit', 2);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('snack', 2);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('seasoning', 2);
INSERT INTO subcategory (subcategory, cat_id) VALUES ('skincare', 3);

INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('pan', 1, 24.99, 0.00, 24.99, '2021-12-10');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('pasta', 2, 5.73, 0.40, 6.13, '2021-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('chicken breast', 3, 4.02, 0.00, 4.02, '2021-05-17');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('milk', 4, 2.18, 0.00, 2.18, '2021-05-17');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('spinach', 5, 5.73, 0.40, 6.13, '2021-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('apple', 6, 5.73, 0.40, 6.13, '2021-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('cookies', 7, 5.73, 0.40, 6.13, '2021-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('chili powder', 8, 5.73, 0.40, 6.13, '2021-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('lotion', 9, 5.73, 0.40, 6.13, '2021-05-22');