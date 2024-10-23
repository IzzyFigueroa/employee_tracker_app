\c postgres;

DROP DATABASE IF EXISTS employee_tracker_app;
CREATE DATABASE employee_tracker_app;
/*when we type this it will delte previous data and start new*/
-- DROP TABLE IF EXISTS departments;
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS employees;

\c employee_tracker_app;


CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    title VARCHAR(250) UNIQUE NOT NULL,
    dept_id INT,
    salary INT,
    manager_id INT
    -- FOREIGN KEY (manager_id) REFERENCES users (id)
    --     ON DELETE SET NULL
);

CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    job_title VARCHAR(200) NOT NULL,
    dept_id VARCHAR(200) NOT NULL,
    salary INT NOT NULL
    -- FOREIGN KEY (user_id) REFERENCES users(id)
    -- ON DELETE CASCADE
);

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
   dept_name VARCHAR(200) NOT NULL
   
);

