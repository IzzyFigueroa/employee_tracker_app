import inquirer from 'inquirer';
// import client from "../config/connection.js";
import { getAllEmployees, getAllDepartments, getAllRoles ,  createDept, createRole, createEmployee, updateEmployeeInDB} from './query.js';
import 'console.table';

// import { getAllShops, getAllUsers, c } from './query.js'


let showWelcome = false;

export async function showAllDepts() {
 const deptArray = await getAllDepartments();
 console.table(deptArray);
}

export async function viewAllEmployees() {
    const employeesArray = await getAllEmployees();
    console.table(employeesArray);
    
}

export async function viewAllRoles() {
  const rolesArray = getAllRoles();
    console.table(rolesArray);
  
  
}



export async function addDept() {
// const deptArray = await getAllDepartments();
const {name} = await inquirer.prompt([
    {
    message: 'Please input a department',
    name: 'name',
    type: 'input'
    },
    
])

await createDept(name)
console.log('\n You have successfully added a department!\n')
  
}
export async function addRole() {
    const departments = await getAllDepartments(); // Fetch all departments to display in the prompt
    const departmentChoices = departments.map((dept: { name: string; id: number }) => ({
      name: dept.name,
      value: dept.id
    }));
  
    const { title, salary, dept_id } = await inquirer.prompt([
      {
        message: 'Please input the role title',
        name: 'title',
        type: 'input'
      },
      {
        message: 'Please input the role salary',
        name: 'salary',
        type: 'input'
      },
      {
        message: 'Please select the department for this role',
        name: 'dept_id',
        type: 'list',
        choices: departmentChoices
      },
    ]);
  
    await createRole(title, salary, dept_id);
    console.log('\n You have successfully added a role!\n');
  }
  export async function addEmployee() {
    const roles = await getAllRoles(); // Fetch all roles to display in the prompt
    const roleChoices = roles.map(role => ({
      name: role.title,
      value: role.id
    }));
  
    const employees = await getAllEmployees();
    const managerChoices = employees.map((employee: { first_name: string; last_name: string; id: number | null }) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));
    managerChoices.unshift({ name: 'None', value: null }); // Add an option for no manager
  
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
      {
        message: 'Please input the employee first name',
        name: 'first_name',
        type: 'input'
      },
      {
        message: 'Please input the employee last name',
        name: 'last_name',
        type: 'input'
      },
      {
        message: 'Please select the role for this employee',
        name: 'role_id',
        type: 'list',
        choices: roleChoices
      },
      {
        message: 'Please select the manager for this employee',
        name: 'manager_id',
        type: 'list',
        choices: managerChoices
      },
    ]);
  
    await createEmployee(first_name, last_name, role_id, manager_id);
    console.log(`\n You have successfully added ${first_name} ${last_name}\n`);
  }

  export async function updateEmployee() {
    const employees = await getAllEmployees(); // Fetch all employees to display in the prompt
    const employeeChoices = employees.map(employee => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));
  
    const roles = await getAllRoles(); // Fetch all roles to display in the prompt
    const roleChoices = roles.map(role => ({
      name: role.title,
      value: role.id
    }));
  
    const managerChoices = employees.map(employee => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));
    managerChoices.unshift({ name: 'None', value: null }); // Add an option for no manager
  
    const { employee_id, role_id, manager_id } = await inquirer.prompt([
      {
        message: 'Please select the employee to update',
        name: 'employee_id',
        type: 'list',
        choices: employeeChoices
      },
    
      {
        message: 'Please select the new role for this employee',
        name: 'role_id',
        type: 'list',
        choices: roleChoices
      },
      {
        message: 'Please select the new manager for this employee',
        name: 'manager_id',
        type: 'list',
        choices: managerChoices
      },
    ]);
  
    await updateEmployeeInDB(employee_id, role_id, manager_id);
    console.log('\n Updated Employee!\n');
  };



export async function showMainMenu() {

    if (showWelcome) {
        console.log('\n------ Welcome To The Shop App ------\n')
        showWelcome = true;
    }
    const { optionFunction } = await inquirer.prompt({
        message: ' Please select an option',
        name: 'optionFunction',
        type: 'list',
        choices: [
            {
                name: 'View All Departments',
                value: showAllDepts
            },
            {
                name: 'View All Roles',
                value: viewAllRoles
            },
            {
                name: 'View All Employees',
                value: viewAllEmployees
            },
            {
                name: 'Add A Department',
                value: addDept

            },
            {
                name: 'Add A Role',
                value: addRole
            },
            {
                name: 'Add An Employee',
                value: addEmployee
            },
            {
                name: 'Update An Employee',
                value: updateEmployee
            },
            {
              name: 'Quit',
              value: 0
            }
          ]
    });

    if (!optionFunction) {
        console.log('\n Thanks for using the app!\n')
        process.exit();
    }

    await optionFunction();

    showMainMenu();

};

// export async function showMainMenu() {

//     if (showWelcome) {
//         console.log('\n------ Welcome To The Shop App ------\n')
//         showWelcome = true;
//     }
//     const {option} = await inquirer.prompt({
//         message: ' Please select an option',
//         name: 'option',
//         type: 'list',
//         choices: ['Show All Shops', 'Add Shop', 'Show All Wines', 'Add Wine']
//     });

//     switch(option) {
//         case 'Show All Shops':
//             await showAllShops();
//             showMainMenu();
//             break;
//         case "Add Shop":
//             await addShop();
//             showMainMenu();
//             break;
//     }
// };
