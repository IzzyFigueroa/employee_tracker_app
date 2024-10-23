\c employee_tracker_app

-- pull all rows from shops and also attach the associated users

SELECT 
 employees.id AS employee_id,
 first_name AS first_name,
 last_name AS last_name,
 title AS title
--  name AS department
 

--  first_name AS first_name,
--  last_name AS last_name
--  title AS title,
--  name AS departments,
--  salary AS salary,
--  manager_id AS manager
FROM employees
RIGHT JOIN roles
    ON employees.role_id = roles.id;

-- JOIN department
--     ON department.id = role_id;


-- SELECT
--     employees.id AS id,
--     employees.first_name AS first_name,
--     employees.last_name AS last_name,
--     roles.title AS title,
--     department.name AS department,
--     roles.salary AS salary,
--     CONCAT(e2.first_name, ' ', e2.last_name) AS manager
-- FROM employees
-- JOIN roles
--     ON employees.role_id = roles.id
-- JOIN department 
--     ON roles.dept_id = department.id
-- RIGHT JOIN employees
--     ON employees.manager_id = employees.id;
SELECT
    department.id AS id,
    name AS shop_name,

    employees.id AS user_id,
    CONCAT(employees.first_name, ' ', employees.last_name) AS user_name,
    CONCAT(managers.first_name, ' ', managers.last_name) AS manager,
    roles.id AS role_id,
    title AS title,
    salary AS salary,
    region AS wine_region,
    price AS wine_price
FROM department
JOIN employees
    ON department.id = employees.id
JOIN roles
    ON department.id = roles.dept_id
LEFT JOIN users as managers
    ON employees.manager_id = managers.id;



--     SELECT
--     department.id AS Department_id,
--      AS shop_name,
--     address AS shop_address,
--     users.id AS user_id,
--     CONCAT(users.first_name, ' ', users.last_name) AS user_name,
--     users.email AS user_email,
--     CONCAT(managers.first_name, ' ', managers.last_name) AS manager,
--     wines.id AS wine_id,
--     brand AS wine_brand,
--     type AS wine_type,
--     region AS wine_region,
--     price AS wine_price
-- FROM shops
-- JOIN users
--     ON shops.user_id = users.id
-- JOIN wines
--     ON shops.id = wines.shop_id
-- LEFT JOIN users as managers
--     ON users.manager_id = managers.id;




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