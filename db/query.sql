SELECT
    employees.id AS id,
    employees.first_name,
    employees.last_name,
    title,
    name AS department_name,
    salary,
    CONCAT(managers.first_name, ' ', managers.last_name) AS manager
    FROM employees
    JOIN roles
     ON employees.role_id = roles.id
     JOIN department
    ON roles.dept_id = department.id
    LEFT JOIN employees as managers
        ON employees.manager_id = managers.id;

