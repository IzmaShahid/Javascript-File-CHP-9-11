// // Question:1
// var cityinput = prompt("Write a city name");
// var city ="Welcome to";
// document.write(`"${city} ${cityinput}".`);
// Question:2

// var gender = prompt("Write your gender here");
// if(gender == "Male"){
//     document.write("Good Morning Sir");
// }
// else if(gender = "Female"){
//     document.write("Good Morning Ma'am");
// }

// // Question:3
// var color = prompt("Write the color of road traffic signals");
// if(color == "red"){
//     document.write("Must stop");
// }
// else if(color == "yellow"){
//     document.write("Ready to move");
// }
// else if(color == "green"){
//     document.write("Move now");
// }

// Question:4
// var carfuel = prompt("Write remaining fuel in car(in litres)");
// if(carfuel <= 0.25){
// alert("Please refuel your car");
// }
// else{
//     alert("You have enough fuel");
// }

// // Question:5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } we can see alert box 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }      // this is not showing alert box
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// } we can see alert box 

// // var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // } we can see alert box
// // if (true){
// //     alert("True");
// //     }
// //     if (false){
// //     alert("False");
// //     // } we can see true in alert box

// // if("car" < "cat"){
// //     alert("car is smaller than cat");
// //     // } we can see alert box

//     // Question:6
// //     var head = "<h1>Marks Sheet</h1>";
// //     document.write(head);
// //     var total = 300;
// //      document.write(`Total Marks: ${total}<br/>`);
// //      var sub = prompt("Write your total Marks obtained in 3 subjects");
// //      document.write(`Marks Obtained: ${sub}<br/>`);
// //      var percentage = (sub / total) * 100;
// //      document.write(`Percentage: ${percentage}%<br/>`);
// //      let ="grade";
// //      if (percentage >= 80) {
// //          grade = 'A+';
// //          remarks = 'Excellent';
// //      }  else if (percentage >= 70) {
// //          grade = 'A';
// //          remarks = 'Good';
// //      } else if (percentage >= 60) {
// //          grade = 'B';
// //          remarks = 'You need to  improve';
// //      } else if (percentage <= 60) {
// //          grade = 'Fail';
// //          remarks = 'Sorry';
// //      } 
// // document.write(`Grade: ${grade}<br/>`);

// // // Question:7

// // var secretnum = 6; 
// // var num = prompt("Guess the secret number");
// // if (num == secretnum) {
// //  alert("Bingo! Correct  answer");
// // }
// // else if (num  == +1 + secretnum){
// //   alert("Close enough to the correct answer") ; 
// // } else{
// //     alert("Don't give up, try again");
// // }
// // // // Question:8
// // let num = prompt("Enter a number");
// // if (num % 3 == 0 ){
// //   alert("number is divisible by 3");
// // }
// // else{
// //   alert("number is not divisible by 3");
// // }
// // // Question:9
// //  let num1 = prompt("Write a number");
// //  if(num1 % 2 == 0){
// //   alert("number is even");
// //  }
// //  else{
// //   alert("number is odd");
// //  }
// // // Question:10
// //  let temperature = prompt("Write a temperature here!");
// //  if (temperature > 40) {
// //   alert("It's too hot outside!");
// //  }
// //  else if(temperature > 30){
// //    alert("The weather today is Normal");
// //  }
// //  else if(temperature > 20){
// //   alert("Today's weather is cool");
// //  }
// //  else if(temperature > 10){
// //   alert("OMG!! Today’s weather is so Cool.");
// //  }
//     //  Question:11
//     var firstnum = prompt("Enter the first number");
//     var secondnum = prompt("Enter the second number");
//     var operation = prompt("Enter the operation (+, -, *, /, %): ");
//     let result;
// if (operation === "+") {
//   result = num1 + num2;
// } else if (operation === "-") {
//   result = num1 - num2;
// } else if (operation === "*") {
//   result = num1 * num2;
// } else if (operation === "/") {
//   if (num2 === 0) {
//     alert("Error: Division by zero!");
//   } else {
//     result = num1 / num2;
//   }
// } else if (operation === "%") {
//   if (num2 === 0) {
//     alert("Error: Division by zero!");
//   } else {
//     result = num1 % num2;
//   }
// } else {
//   alert("Invalid operation!");
// }

// // Display result
// if (result !== undefined) {
//   alert(`The result is: ${result}`);
// }