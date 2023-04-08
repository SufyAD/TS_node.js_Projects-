import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// const angelMowersPromise = new Promise<string>((resolve, reject) => {
//     // a resolved promise after certain hours
//     setTimeout(() => {
//         resolve('We finished mowing the lawn')
//     }, 100000) // resolves after 100,000ms
//     reject("We couldn't mow the lawn")
// })
// const myPaymentPromise = new Promise<Record<string, number | string>>((resolve, reject) => {
//     // a resolved promise with  an object of 1000 Euro payment
//     // and a thank you message
//     setTimeout(() => {
//         resolve({
//             amount: 1000,
//             note: 'Thank You',
//         })
//     }, 100000)
//     // reject with 0 Euro and an unstatisfatory note
//     reject({
//         amount: 0,
//         note: 'Sorry Lawn was not properly Mowed',
//     })
// })
// angelMowersPromise
//     .then(() => myPaymentPromise.then(res => console.log(res)))
//     .catch(error => console.log(error))
const sleep = () => {
    return new Promise((r) => {
        setTimeout(r, 3000); //3sec
    });
};
const welcome = async () => {
    console.clear;
    let rainbowTitle = chalkAnimation.neon('\n***Developed by Sufyan Ahmed***');
    await sleep(); //using await for the sake that operation is performed after this!
    rainbowTitle.stop();
    console.log(chalk.redBright('Lets Start Calculation'));
};
export { sleep, welcome };
