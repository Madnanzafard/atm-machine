#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 10000; 
let myPin : number = 1234;

let pinAnswer = await inquirer.prompt([{
    name : "pin",
    message : "Please Enter your pin number",
    type : "number", 
}]);

if (pinAnswer.pin === myPin) {
    console.log("Your pin number is correct")

    let operationAns = await inquirer.prompt([{
        name : "operation",
        message : "please select option",
        type : "list",
        choices : ["Withdraw", "check balance","fast cash"],
    }]);
    
    if (operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt([{
            name : "amount",
            message : "enter your amount",
            type : "number",
        }]);
        if (amountAns.amount > myBalance){
            console.log(`Your balance is insufficient`);
        }else{
        myBalance -= amountAns.amount;
        console.log(`your remaining balance ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance"){
        console.log(`Your balance is ${myBalance}`);
    }else if (operationAns.operation === "fast cash"){
        let fastCashAns = await inquirer.prompt([{
           name : "amount",
           message : " Select your amount",
           type : "list",
           choices: ["500" , "1000", "2000", "5000"], 
        }]) 
        if (fastCashAns.amount === "500"){
            myBalance -= fastCashAns.amount;
            console.log(`your remaining balance ${myBalance}`);
        }else if (fastCashAns.amount === "1000"){
            myBalance -= fastCashAns.amount;
            console.log(`your remaining balance ${myBalance}`);
        }else if (fastCashAns.amount === "2000"){
            myBalance -= fastCashAns.amount;
            console.log(`your remaining balance ${myBalance}`);
        }else if (fastCashAns.amount === "5000"){
            myBalance -= fastCashAns.amount;
            console.log(`your remaining balance ${myBalance}`);
        }
    }
}else {
    console.log("Your pin is incorrect")
}