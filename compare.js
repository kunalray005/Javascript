let a=10;
let b=20;
document.write("a>b "+(a>b)+"<br>");
document.write("a<b "+(a<b)+"<br>");
document.write("a==b "+(a==b)+"<br>");
document.write("a!==b "+(a!==b)+"<br>");
document.write("a===b "+(a===b)+"<br>");
document.write("a>=b "+(a>=b)+"<br>");
document.write("a<=b "+(a<=b)+"<br>");

// write a program demontrate the concept of logical operator in java script
console.log(5>9 && 10>6);
console.log(5>10 || 3>1);
console.log(!(3>7));


let age=Number(prompt("enetr you age"));
if (age>=18){
    console.log("eligible to vote")

}
else{
    console.log("not elgible")
}


let num1 = Number(prompt("enetr the number to check odd or even"))
if (num1 %2==0){
    console.log("even")
}
else{
    console.log("odd")

}