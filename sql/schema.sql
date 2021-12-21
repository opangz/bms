PRAGMA foreign_keys = ON;

CREATE TABLE category(
    cat_id INTEGER PRIMARY KEY AUTOINCREMENT,
    category VARCHAR2(20) NOT NULL
);

CREATE TABLE subcategory(
    subcat_id INTEGER PRIMARY KEY AUTOINCREMENT,
    subcategory VARCHAR2(20) NOT NULL,
    cat_id INTEGER NOT NULL,
    FOREIGN KEY(cat_id) REFERENCES category(cat_id)
);

CREATE TABLE item(
    item_id INTEGER PRIMARY KEY AUTOINCREMENT,
    item VARCHAR2(40) NOT NULL,
    date DATE NOT NULL,
    subcat_id INTEGER NOT NULL,
    pretax_price DECIMAL(8, 2) NOT NULL,
    tax DECIMAL(8, 2) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    FOREIGN KEY (subcat_id) REFERENCES subcategory(subcat_id)
);