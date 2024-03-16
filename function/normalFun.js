//calculator function with normal function 


function calculator(num1,num2, operator){
    let result;
 switch (operator) {
     case "+":
         return num1 + num2;
         case '-':
             result = num1 - num2;
             return result;
             case "*":
                 return num1 * num2;
                 case "/":
                 if(num2 === 0){
                     return "0 is not allow"
                 } else {
                     
                     return num1 / num2;
                 }
                     
                 defualt:
                 return "no operator found";
 }
}

console.log(calculator(2,5, "+"));
console.log(calculator(2,5, "-"));
console.log(calculator(2,5, "*"));
console.log(calculator(10,0, "/"));
