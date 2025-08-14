// let num = 32;

// if(num % 10 == 0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old`);


// let quarter = 5;

// switch(quarter){
//     case 1:
//         console.log("Months in quarter 1 are January, February, March");
//         break;
//     case 2:
//         console.log("Months in quarter 2 are April, May, June");
//         break;
//     case 3:
//         console.log("Months in quarter 3 are July, August, September");
//         break;
//     case 4:
//         console.log("Months in quarter 4 are October, November, December");
//         break;
//     default:
//         console.log("Invalid quarter");
// }


// let str = "am";

// if(str[0] === "A" || str[0] === "a" && str.length > 5){
//     console.log("String is a GOLDEN STRING");
// }
// else{
//     console.log("String is not a GOLDEN STRING");
// }


// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is the largest number`);
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is the largest number`);
// }
// else{
//     console.log(`${num3} is the largest number`);
// }

// let num1 = 3221;
// let num2 = 47852;

// if(num1%10 === num2%10){
//     console.log(`last digits of ${num1} and ${num2} are same which is ${num1%10}`);
// }
// else{
//     console.log(`last digits of ${num1} and ${num2} are not same`);
// }


// let str = " I Love coding";
// let newStr = str.replace("Love" , "do");
// console.log(newStr);
// let repStr = str.repeat(3);
// console.log(repStr);


// let msg = "help!";
// console.log(msg.trim().toUpperCase());


// let name = "ApnaCollege";
// console.log(name.slice(4 , 9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna", "Our"))
// console.log(name.slice(4).replace("l" , "t"));


// let students = ["Aush" , "Gagan" , "Surinder" , "Daljit"];
// console.log(students[0] [1]);

// let fruits = ["Mango" , "Banana" , "Apple" , "Grapes"];
// console.log(fruits);
// fruits[0] = "Guava";
// fruits.push("Kiwi");
// fruits.pop();

// let month = ["january" , "july" , "march" , "august"];
// console.log(month);
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");
// console.log(month);

// let month = ["january" , "july" , "march" , "august"];
// month.splice(0 , 2 , "july", "june");

// let codinglang = ["c", "c++", "javascript", "python", "java", "c#", "sql"]
// codinglang.reverse();
// console.log(codinglang.indexOf("javascript"));


// let game = [['X',null,'O'], [null,'X',null],['O',null,'O']];
// console.log(game);
// game[0][1] = 'O';
// console.log(game);

// let str = "" ;
// if(str == null){
//     console.log("String is null");
// }
// else{
//     console.log("String is not null");
// }




// str = prompt("Please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

// let aush = ["student" , 20 , 4.5 , "female"];
// let char = 20;

// if(aush.indexOf(char) != -1){
//     console.log("Character found");
// }
// else{
//     console.log("Character not found");
// }


// 

// 

// let myFavMov = "Ashke";

// let guess = prompt("Hey!Let's play a game. Can you guess my favourite movie??");

// while((guess != myFavMov) &&(guess != "QUIT")){
//     guess = prompt("OOPPSSSSS!!!WRONG GUESS ....TRY AGAIN :(");
// }

// if(guess == myFavMov){
//     console.log("YAYYY!!! YOU GUESSED IT RIGHT!!!");
// }else{
//     console.log("Better luck next time :(")
// }


// let i = 1
// while(i <= 10){
//     if(i ==7){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let students = ["AUSH", "AKANSHA", "ABHI", "JESSICA", "DIVYATEJPAL"];

// for(let i = 0; i<students.length; i++){
//     console.log(i+1 , students[i]);
// }


let heroes = [["ironman","spiderman","thor"], ["superman","wonderwoman","flash"]];

// for(let i =0 ; i<heroes.length; i++){
//     console.log(`list #${i}`);
//     for(let j = 0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }