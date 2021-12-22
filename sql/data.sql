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
VALUES ('pan', 1, 24.99, 0.00, 24.99, '2019-12-10');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('pasta', 2, 5.73, 0.00, 0.13, '2021-02-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('chicken breast', 3, 4.00, 0.00, 4.02, '2021-05-17');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('milk', 4, 2.99, 0.00, 2.18, '2021-03-17');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('spinach', 5, 25.99, 0.40, 7.33, '2021-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('apple', 6, 6.00, 5.60, 6.13, '2020-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('cookies', 7, 8.49, 2.45, 8.13, '2021-012-11');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('chili powder', 8, 9.99, 1.20, 16.13, '2019-05-22');
INSERT INTO item (item, subcat_id, pretax_price, tax, price, date)
VALUES ('lotion', 9, 15.50, 0.00, 12.49, '2021-05-23');