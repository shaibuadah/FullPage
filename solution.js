//declaring variable called num and assign the value -10
var num = -10;
console.log("All numbers between -10 and 19");


//write the loop using while keyword

while(num <19){
    console.log(num);
    num++
}

//declaring variable called evenNum and assign a value of 10
var evenNum = 10;
console.log("All even numbers between 10 and 40");


//write the loop using while keyword

while(evenNum <= 40){
    if(evenNum % 2 === 0){
       console.log(evenNum);
    }
    evenNum++;
}

var oddNum = 300;
console.log("All odd numbers between 300 and 333");


//write the loop using while keyword

while(oddNum <= 333){
    if(oddNum % 2 !== 0){
       console.log(oddNum);
    }
    oddNum++;
}

//print all numbers divisible by 5 and 3 between 5 and 50

console.log("All numbers divisible by 5 and 3 between 5 and 50");
var allNum = 5;

while(allNum <=50){
    if((allNum % 5 === 0) && (allNum % 3 ===0)){
        console.log(allNum);
    }
    allNum++;
}

//forloop demo
console.log("print all numbers between -10 and 20");
for(var num = -10; num<=20; num++){
    console.log(num);
}

console.log("print all even numbers between 10 and 40");
for(var evenNum = 10; evenNum<=40; evenNum++){
    if(evenNum % 2 === 0){
        console.log(evenNum);
    }

}

console.log("print all odd numbers between 300 and 333");
for(oddNum = 300; oddNum <= 333; oddNum++){
    if(oddNum % 2 !== 0){
       console.log(oddNum);
    }

}

console.log("All numbers divisible by 5 and 3 between 5 and 50");
var allNum = 5;

for(var allNum = 5; allNum <=50; allNum++){
    if((allNum % 5 === 0) && (allNum % 3 ===0)){
        console.log(allNum);
    }

}

/*
var x = prompt("Are we there yet?");
while(x !=="Yes" && x !=="yeah"){
    var x = prompt("Are we there yet?");
}
alert("Yay, we've made !");


var answer = prompt("Are we there yet?");
while (answer.indexOf ("yes" && "yeah" && "yah") === -1){
    var answer = prompt ("Are we there yet?");
}
alert ("Yay, we made It!!!");

*/
function poem(){
    console.log("Twinkle Twinkle Little Star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}

//function to calculate the square of number 

/*
function numberSquare(){
    var x = prompt("Enter a number:");
    var answer = x*x;
    console.log("The answer is:" +answer);
}
*/

function square(num){
    console.log(num * num);
}

function greet(person1, person2, person3){
    console.log("hi "+ person1);
    console.log("hi "+ person2);
    console.log("hi "+ person3);
 

}

function square(num){
    return num * num;
}

var Square = function(num){
    return num * num;
}

function kebabToSnake(str){
    var myString = str.replace(/-/g , "_");
    return myString
    
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g , "_");
    return newStr;
}

var webDesign = ["Shaibu", "Joe", "Isreal", "Raphel", "Ade"];
webDesign[1] = "Joseph";
webDesign[5] = "Perpetual";
webDesign.push("sumaila");
webDesign.pop();
webDesign.unshift("sumaila");
webDesign.shift();
alert(webDesign);


var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var fruitsJuice = fruits.slice(2, 5);
alert(fruitsJuice);


var numbers = [22, 67, 33, 95, 88];
console.log(numbers[numbers.length]);

var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];
console.log(friendGroups[2][0]);



