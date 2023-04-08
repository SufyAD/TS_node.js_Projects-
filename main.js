//#! /usr/bin/env node --> called as shiban path defining
import inquirer from "inquirer";
import { welcome } from "./greet.js";
import { askQuestion } from "./ask.js";
//An async function always returns a promise. Even if you omit the Promise keyword, the compiler will wrap your function in an immediately resolved promise.
async function askAgain() {
    do {
        await welcome();
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: 'confirm',
            name: 'restart',
            message: '\nDo you want to Continue?',
            default: false
        });
    } while (again.restart === true);
}
await askAgain();
