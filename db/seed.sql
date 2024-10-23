 \c employee_tracker_app;
 
 INSERT INTO departments (department_id, dept_name) VALUES 
 (1, 'Electronics'),
 (2, 'Clothing'),
 (3, 'Home and Furniture'),
 (4, 'Groceries'),
 (5, 'Pharmacy');

 INSERT INTO roles (role_id, job_title, dept_id, salary) VALUES 
 (1, 'Cashier', 4, 25000),
 (2, 'Stock Associate', 2, 26000),
 (3, 'Department Manager', 3, 45000),
 (4, 'Pharmacy Technician', 5, 40000),
 (5, 'Customer Service Representative', 1, 28000);

 INSERT INTO employees (employee_id, first_name, last_name, title, dept_id, salary, manager_id) VALUES 
 (1, 'John', 'Doe', 'Cashier', 4, 25000, 3),
(2, 'Jane', 'Smith', 'Stock Associate', 2, 26000, 4),
(3, 'Alice', 'Johnson', 'Department Manager', 3, 45000, NULL),
(4, 'Bob', 'Brown', 'Pharmacy Technician', 5, 40000, 5),
(5, 'Charlie', 'Davis', 'Customer Service Representative', 1, 28000, 3);
