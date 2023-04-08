import inquirer from "inquirer"

export async function askQuestion() {
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