//OBJECT
//OBJECT IS A COLLECTION OF PROPERTIES.A PROPERTY IS ASSOCIATION B/W A NAME OR A KEY AND VALUE.A PROPERTY'S VALUE CAN BE FUNCTION WHICH CASE IS CALLED A METHOD
const employee={
  empId:1000,empName:'dove',empDesg:'coder',empLoc:'chennia',empSalary:30000,empExp:3
}
console.log(employee);
//print value of id empName in object
console.log(`employee name:${employee['empName']}`);
//print value of id empLoc in object
console.log(`employee locate:${employee.empLoc}`);
// in - is use check whether a key is present in a object
'empDesg'in employee&&console.log(`employee desg:${employee.empDesg}`);
// add a id to object
employee.house=88
// check whether a key is present in a object and add a id into object
"mySsk" in employee ?console.log(`employee ssk status:${employee.mySsk}`):employee.
mySsk= true
console.log(employee);
//increment value stored in  id of the object
employee.empSalary+=4000
console.log(employee);
//to fech id details from object
for(let key in employee){
  console.log(`${key}:${employee[key]}`);
}

//question of objects

 const car = {
  name: "boleno",
  model: "hatch-back",
  manufacturer: "Maruti Suzuki",
  price: "13 lakh"
}

//display car name and its manufacturer
console.log('display car name and its manufacturer');
console.log(`car name and its manufacturer ${car.name && car. manufacturer}`);

console.log('------------------');

//check 'model' key is present then display its value
console.log('check model key is present then display its value');
for (let key in car){
  console.log(`${key} = ${car[key]}`);
}

//add 'varient' as automatic, manual
car.varient=['automatic','manual']
console.log(car);


//add color as red,white,blue,ash,black
car.color=['red','white','blue','ash','black']
console.log(car);

// insert hybrid in varient of car object
car.varient.push('hybrid')
console.log(car);
// Destructure object - to destructure a object ie already defined to make it simple call
const {name,model,price}=car
console.log(`car price=${price}`);
// to find a keys in object we use-hasOwnProperty
console.log(car.hasOwnProperty('name'));
// another display keys from the object
console.log(Object.keys(car));
// another display values from the object
console.log(Object.values(car));

// print word count along with each word 
//output{hello:2,hai:1,welcome:1}

// solving
// first creat a string
//second create a end output
// split the string get a array
//use forEach read the words one by one 
// if word is in output :increment value of key
//if word not in output :insert word as key and value as 1
// display output
text='hello hai hello welcome'
output={}
let d=text.split(' ').forEach(words=>output.hasOwnProperty(words)?output[words]+=1:output[words]=1)
console.log(output);
//Task 1
//find the first recursive character from the given pattern="ABBCCBAD"
//ans: A
let pattern = "ABBCCBAD"; // input pattern
let charArray = pattern.split('');
let firstRecurringChar = charArray.find((char, index) => charArray.indexOf(char) !== index);
console.log(firstRecurringChar);

//Task 2
//display number count
numArray = [10,20,30,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]
//output = {10:2,20:4,30:3,40:2,50:2,60:2,70:2,80:1}

out = {}
let result = numArray.forEach(num => out.hasOwnProperty(num) ? out[num] += 1 : out[num] = 1)
console.log(out)
ou = {}
let res = numArray.forEach(num => num in ou ? ou[num] += 1 : ou[num] = 1)
console.log(ou)


