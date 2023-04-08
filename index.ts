//#! /usr/bin/env node --> called as shiban path defining
import inquirer from "inquirer";
import Table from "cli-table";
import  chalkAnimation, { karaoke } from "chalk-animation";
import { welcome } from "./greet.js";

//An async function always returns a promise. Even if you omit the Promise keyword, the compiler will wrap your function in an immediately resolved promise.

await welcome();
//Displaying table of Operations
var operatorsTable = new Table({
    head: ['Sr.no', 'Operators', 'Description']
});
var operations: string[][] = [
    ['01', '+', 'Addition'],
    ['02', '-', 'Subtraction'],
    ['03', '*', 'Multiplication'],
    ['04', '/', 'Division'],
    ['05', '^', 'Power'],
    ['06', '**', 'Exponent'],
    ['07', '%', 'Modulus'],
    ['08', 'sqrt', 'Square root'],
    ['09', '1/x', 'Reciprocal']
];
operatorsTable.push(...operations); //... means push all the operations 

async function displayTable(value: chalkAnimation.Animation){
    setTimeout(() => {
        value.stop();
        console.log('CLI Calculator assists you in number of tasks!');
    });
    console.log(operatorsTable.toString);// toStrign is used to display in the form of text
}

const display = new Promise((resolve) => {
    // a resolved promise after certain hours
    setTimeout(() => {
        resolve('Lets do some caculation!')
    }, 3000) // resolves after 100,000ms
    // reject("We couldn't mow the lawn")
    display.then(()=> console.log(resolve));
});


//Ask user for the input
async function askQuestion() {
    await inquirer //interfacing with promprt
    .prompt([
        //put your questions here 
        {
            type: 'list',
            name: 'operator',
            message: 'Which operation you would like to perform?',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter number 1:'
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter number 2:'
        },
    ])
    .then((answer) => {
        // console.log(answers);
        //creating conditions
        if(answer.operator === 'Addition'){
            console.log(
                `${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`
            )
        }
        else if(answer.operator === 'Subtraction'){
            console.log(
                `${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`
            )
        }
        else if(answer.operator === 'Multiplication'){
            console.log(
                `${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`
            )
        }
        else if(answer.operator === 'Division'){
            console.log(
                `${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`
            )
        }
        else {
            console.log('Enter a number please!')
        }
        })
}
// askQuestion();
//creating while loop 
async function askAgain (){
    do{
        displayTable;
        await askQuestion();
        var again = await inquirer
        .prompt({
            type: 'confirm',
            name: 'restart',
            message: '\nDo you want to Continue?',
            default: false
        });
    }while(again.restart === true);
}
await askAgain()


