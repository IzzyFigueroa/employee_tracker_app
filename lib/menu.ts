// import inquirer from 'inquirer';
// import 'console.table';

// import { getAllShops, getAllUsers, createShop } from './query.js'


// let showWelcome = false;

// export async function addEmployee() {
//     const answers = await inquirer.prompt([
//         {
//             type: 'input',
//             name: 'role_id',
//             message: 'Enter the Employee ID number'
//         },
//         {
//             type: 'input',
//             name: 'firstName',
//             message: 'Enter the employee\'s first name:',
//         },
//         {
//             type: 'input',
//             name: 'lastName',
//             message: 'Enter the employee\'s last name:',
//         },
//         {
//             type: 'input',
//             name: 'title',
//             message: 'Enter the employee\'s role:',
//         },
//         {
//             type: 'input',
//             name: 'department',
//             message: 'Enter the employee\'s department:',
//         },
//         {
//             type: 'input',
//             name: 'salary',
//             message: 'Enter the employee\'s salary:',
//         },
//     ]);



// // export async function addShop() {

// //     const usersArray = await getAllUsers();
// //     const {user_id, name, address} = await inquirer.prompt([
// //         {
// //           message: 'Please select the owner of the shop',
// //           name: 'user_id',
// //           type: 'list',
// //           choices: usersArray.map((userObj) => {
// //             return {
// //               name: userObj.user_name,
// //               value: userObj.id
// //             }
// //           })
// //         },
// //         {
// //           message: 'Enter the shop name',
// //           name: 'name',
// //           type: 'input'
// //         },
// //         {
// //           message: 'Enter the shop address',
// //           name: 'address',
// //           type: 'input'
// //         }
// //       ]);

// await createShop(user_id, name, address)

// console.log('\n Shop created successfully!\n')

//     }

// export async function showAllDepts() {
//     const DeptRowsArray = await getAllShops();
//     console.table(DeptRowsArray)
// };


// export async function showMainMenu() {

//     if (showWelcome) {
//         console.log('\n------ Welcome To The Shop App ------\n')
//         showWelcome = true;
//     }
//     const { optionFunction } = await inquirer.prompt({
//         message: ' Please select an option',
//         name: 'optionFunction',
//         type: 'list',
//         choices: [
//             {
//                 name: 'View All Departments',
//                 value: showAllDepts
//             },
//             {
//                 name: 'View All Roles',
//                 value: viewAllRoles
//             },
//             {
//                 name: 'View All Employees',
//                 value: viewAllEmployees
//             },
//             {
//                 name: 'Add A Department',
//                 value: addDept

//             },
//             {
//                 name: 'Add A Role',
//                 value: addRole
//             },
//             {
//                 name: 'Add An Employee',
//                 value: addEmployee
//             },
//             {
//                 name: 'Update An Employee',
//                 value: updateEmployee
//             },
//           ]
//     });

//     if (!optionFunction) {
//         console.log('\n Thanks for using the shop app!\n')
//         process.exit();
//     }

//     await optionFunction();

//     showMainMenu();

// };

// // export async function showMainMenu() {

// //     if (showWelcome) {
// //         console.log('\n------ Welcome To The Shop App ------\n')
// //         showWelcome = true;
// //     }
// //     const {option} = await inquirer.prompt({
// //         message: ' Please select an option',
// //         name: 'option',
// //         type: 'list',
// //         choices: ['Show All Shops', 'Add Shop', 'Show All Wines', 'Add Wine']
// //     });

// //     switch(option) {
// //         case 'Show All Shops':
// //             await showAllShops();
// //             showMainMenu();
// //             break;
// //         case "Add Shop":
// //             await addShop();
// //             showMainMenu();
// //             break;
// //     }
// // };
