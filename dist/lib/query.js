import client from "../config/connection.js";
import 'console.table';
// import { updateEmployee } from "./menu.js";
// export async function getAllEmployess() {
// export async function updateEmployee() {
// }
export async function getAllEmployees() {
    const sql = `
    SELECT
    employees.id AS id,
    employees.first_name AS first_name,
    employees.last_name AS last_name,
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
        ON employees.manager_id = managers.id
    `;
    const { rows } = await client.query(sql);
    console.table(rows);
    return rows;
}
export async function getAllDepartments() {
    const sql = `
    SELECT
    * FROM department`;
    const { rows } = await client.query(sql);
    console.table(rows);
    return rows;
}
export async function getAllRoles() {
    const sql = `
    SELECT
    * FROM Roles
    `;
    const { rows } = await client.query(sql);
    console.table(rows);
    return rows;
}
export async function createDept(name) {
    const sql = `
    INSERT INTO department (name) VALUES ($1)
    `;
    await client.query(sql, [name]);
}
export async function createRole(title, salary, dept_id) {
    const sql = `
  INSERT INTO roles (title, salary, dept_id)
  VALUES ($1, $2, $3)
  `;
    const { rows } = await client.query(sql, [title, salary, dept_id]);
    return rows;
}
export async function createEmployee(first_name, last_name, role_id, manager_id) {
    const sql = `
  INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES ($1, $2, $3, $4)
  ;
  `;
    const { rows } = await client.query(sql, [first_name, last_name, role_id, manager_id]);
    return rows[0];
}
;
export async function updateEmployeeInDB(employee_id, role_id, manager_id) {
    const sql = `
    UPDATE employees
    SET role_id = $1, manager_id = $2
    WHERE id = $3
    ;
    `;
    const { rows } = await client.query(sql, [role_id, manager_id, employee_id]);
    return rows[0];
}
//# sourceMappingURL=query.js.map