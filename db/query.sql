\c winery_app_db;

-- pull all rows from shops and also attach the associated users




SELECT
    shops.id AS shop_id,
    name AS shop_name,
    address AS shop_address,
    users.id AS user_id,
    CONCAT(users.first_name, ' ', users.last_name) AS user_name,
    users.email AS user_email,
    CONCAT(managers.first_name, ' ', managers.last_name) AS manager,
    wines.id AS wine_id,
    brand AS wine_brand,
    type AS wine_type,
    region AS wine_region,
    price AS wine_price
FROM shops
JOIN users
    ON shops.user_id = users.id
JOIN wines
    ON shops.id = wines.shop_id
LEFT JOIN users as managers
    ON users.manager_id = managers.id;



     -- SELECT
-- u.id AS user_id,
-- CONCAT(u.first_name, ' ', u.last_name) AS user_name,
-- CONCAT(managers.first_name, ' ', managers.last_name) AS manager_name
-- FROM users AS u LEFT JOIN users AS managers
-- ON u.manager_id = managers.id;

-- NOTES --------------------------------
-- Pull all rows from shops and also attach the associated users
-- First only pulls rows that have an association...
-- RIGHT means give me all users even if there are no associations (LEFT would mean all shops)
-- you can combine multiple tables, but you need to combine the clause