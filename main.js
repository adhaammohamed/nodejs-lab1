function sum(x,y) {
return x+y
}
console.log(sum(6,4))
// ========================
//2
function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
console.log( prime(7));

// ============================
//3
function reversse(word) {
    return word.split('').reverse().join('');
}
console.log(reversse("adham"));
// =============================
// 4
function largest(num) {
    let largNum=num[0] ;
    for (let i = 1; i < num.length; i++) {
        if(num[i] > largNum ){
            largNum=num[i]
        }        
    }
    return largNum
}
console.log(largest([1, 2, 3, 4, 5, 6]));
// =============================
// 5
function evenNum(num){
 let even =[]
 for (let i = 0; i < num.length; i++) {
     if (num[i]%2 === 0){
        even.push(num[i])
    }
 }
    return even;
}
console.log(evenNum([1, 2, 3, 4, 5, 6]));
// =============================
// 6
function reverse2(num){
    let revers = "";
    for (let i = num.length - 1; i >= 0; i--) {
        revers += num[i]; 
    }
    return revers;
}
console.log(reverseString("route"));
// =============================
// 7
function average(num) {
    let sum=0;
    for (let i = 0; i < num.length; i++){
        sum+=num[i];
    }
    let avrg=sum/ num.length;
    return avrg;
}
console.log( average( [1, 2, 3, 4, 5]));
// =============================
// 8
function whether(day) {
    if (day ==1 ||day ==2 ||day ==3 ||day ==4 ||day ==5 ||day ==6 ) {
     console.log("Weekday");
    } else {
     console.log("Weekend");
    }
}
whether(5)
whether(7)
// =============================
// 9
function evenNum(num){
    let numbers =[]
    for (let i = 0; i < num.length; i++) {
        if (num[i]%2 === 0 || num[i]%3 === 0){
            numbers.push(num[i])
       }
    }
    return numbers;
}
console.log(evenNum( [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// =============================
// 10
function findElement(numbers, element) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === element) {
            return i; 
        }
    }
    return -1;
}
console.log(findElement([1, 2, 3, 4, 5], 3));
console.log(findElement(  [1, 2, 3, 4, 5], 10));
// =============================
// 11
function factorial (num) {
    let factorialNumber=1;
     for (let i=num; i >= 1 ;i--) {
        factorialNumber*=i;
     }
    return factorialNumber;
}
console.log(factorial(5));
// =============================
// 12
function info(user) {
    return Object.keys(user); 
}
console.log( info({name: "John", age: 30}));
// =============================
// 13
function uniqueNumber(numbers) {
let newArry=[]
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                count++;
            }
        }
        if (count === 1) {
            newArry.push(numbers[i]);
        }
    }
return newArry;
}
console.log(uniqueNumber( [1, 2, 2, 3, 4, 4, 5]));
// =============================
// 14
function countString(word) {
    let result = {};
    for (let i = 0; i < word.length; i++) {
        let Character = word[i];
        result[Character] = (result[Character] || 0) + 1;
    }
    return result;
}
console.log(countString("hello"));
// =============================
// 15
function sortArray(nmbers) {
 let result=[];
 result= nmbers.sort((a,b)=>(a-b))
    return result
}
console.log(sortArray([5, 3, 8, 1, 2]));
// =============================
// 16
// =============================
// 17
function Car(model, year) {
    this.model = model;  
    this.year = year;   
    this.displayDetails = function() {
        return `Model: ${this.model}, Year: ${this.year}`;
    };
    
}
const car1 = new Car("Toyota", 2020);
console.log(car1.displayDetails()); 
// =============================
// 18
function checkProp(obj,property) {
    if (property in obj) {
        return true
    } else {
        return false
    }
}
console.log(checkProp({name: "Alice", age: 25},"name"));
console.log(checkProp({name: "Alice", age: 25}, "address"));

// =============================
// 20
function calcNumber(num1,num2,operation){
        let reslt=0;
    switch (operation) {
        case "+":
            reslt=num1+num2;
        break;
        case "-":
            reslt=num1-num2;
        
        break;
        case "*":
            reslt=num1*num2;

        break;
        case "/":
            reslt=num1/num2;
        break;
    
        default:
            reslt="invalid oprerator"
            break;
    }
    return reslt;
}
console.log(calcNumber(5,3,"+"));
console.log(calcNumber(5,3,"%"));

