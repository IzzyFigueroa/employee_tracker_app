import inquirer from 'inquirer';
import 'console.table';

import { getAllShops, getAllUsers, c } from './query.js'


let showWelcome = false;

export async function addShop() {
    // const rows = [
    //     {
    //         id: 1,
    //         user_name: 'Bob Smith'
    //     },
    //     {
    //         id: 2,
    //         user_name: 'Jane Doe'
    //     }
    // ]
    const usersArray = await getAllUsers();
    const {user_id, name, address} = await inquirer.prompt([
        {
          message: 'Please select the owner of the shop',
          name: 'user_id',
          type: 'list',
          choices: usersArray.map((userObj) => {
            return {
              name: userObj.user_name,
              value: userObj.id
            }
          })
        },
        {
          message: 'Enter the shop name',
          name: 'name',
          type: 'input'
        },
        {
          message: 'Enter the shop address',
          name: 'address',
          type: 'input'
        }
      ]);

await createShop(user_id, name, address)

console.log('\n Shop created successfully!\n')

    }

export async function showAllShops() {
    const shopRowsArray = await getAllShops();
    console.table(shopRowsArray)
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
