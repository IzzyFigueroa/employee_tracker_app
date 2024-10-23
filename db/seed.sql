 \c employee_tracker_app;
 
 INSERT INTO department ( name) VALUES 
 ('Electronics'),
 ('Clothing'),
 ('Home and Furniture'),
 ('Groceries'),
  ('Pharmacy');

 INSERT INTO roles ( title, salary, dept_id) VALUES 
 ('Cashier', 35000, 4),
 ('Stock Associate', 45000, 2),
 ('Department Manager', 45000, 3),
 ('Pharmacy Technician', 55000, 5),
 ('Customer Service Rep', 47000, 2);

 INSERT INTO employees ( first_name, last_name, role_id, manager_id) VALUES 
( 'John', 'Doe', 1, 3),
( 'Jane', 'Smith', 2, 4),
( 'Alice', 'Johnson', 3, 4),
( 'Bob', 'Brown', 4, 5),
( 'Charlie', 'Davis', 5, 3);
