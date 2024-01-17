//OBJECT
//OBJECT IS A COLLECTION OF PROPERTIES.A PROPERTY IS ASSOCIATION B/W A NAME OR A KEY AND VALUE.A PROPERTY'S VALUE CAN BE FUNCTION WHICH CASE IS CALLED A METHOD
// const employee={
//   empId:1000,empName:'dove',empDesg:'coder',empLoc:'chennia',empSalary:30000,empExp:3
// }

// //print value of id empName in object
// console.log('employee=',employee['empName'])
// //print value of id empLoc in object
// console.log(`emploc=${employee.empLoc}`)
// // in - is use check whether a key is present in a object
// 'empExp'in employee&&console.log('checking:',employee.empLoc)
// // add a id to object
// employee.d='true'
// // check whether a key is present in a object and if not add a id into object
// 'f'in employee?console.log(employee.f):employee.f=0
// console.log(employee);
// //increment value stored in  id of the object
// employee.empSalary+=4000
// console.log(employee);
// //to fech id details from object
// for(let key in employee){
//   console.log(`${key}:${employee[key]}`);
// }

//question of objects

//  const car = {
//   name: "boleno",
//   model: "hatch-back",
//   manufacturer: "Maruti Suzuki",
//   price: "13 lakh"
// }

// //display car name and its manufacturer
// console.log('display car name and its manufacturer');
// console.log(`car name and its manufacturer ${car.name && car. manufacturer}`);

// console.log('------------------');

// //check 'model' key is present then display its value
// console.log('check model key is present then display its value');
// car.hasOwnProperty('model')?console.log(car.model):car.model=r
// //add 'varient' as automatic, manual
// console.log('add varient as automatic manual');
// car.varient=['automatic','manul']

// console.log('------------------');

// //add color as red,white,blue,ash,black
// car.color=['red','white','blue','ash','black']
// console.log(car);

// // insert hybrid in varient of car object
// car.varient.push('r')

// console.log(car)
// // Destructure object - to destructure a object ie already defined to make it simple call
// const{price,model,varient}=car
// console.log(price,model)
// // to find a keys in object we use-hasOwnProperty
// console.log(car.hasOwnProperty('model'))
// // another display keys from the object
// console.log(Object.keys(car));
// // another display values from the object
// console.log(Object.values(car));

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
// text='hello hai hello welcome'
// output={}
// let d=text.split(' ').forEach(words=>output.hasOwnProperty(words)?output[words]+=1:output[words]=1)
// console.log(output);
// //
// let r=text.split(' ').forEach(p=>output.hasOwnProperty(p)?output[p]+=1:output[p]=1)
// console.log(output)
// //Task 1
// //find the first recursive character from the given pattern="ABBCCBAD"
// //ans: A
let pattern = "ABCCBAD"; // input pattern
// let charArray = pattern.split('');
// let firstRecurringChar = charArray.find((char, index) => charArray.indexOf(char) !== index);
// console.log(firstRecurringChar);
// let ch=pattern.split('');
// let f=ch.find((char,index)=>ch.indexOf(char)!==index)
// console.log(f)
o={}
// f=pattern.split('')
// r=f.find((char,index)=>f.indexOf(char)!==index)
// console.log(r)
for(let char of pattern){
  if(char in o){
    console.log(char)
    break;
  }
  else{
    o[char]=1
  }
}

// // method -2
// outline={}
// for(let char of pattern){
//   if(char in outline){
//     console.log(`first recursive character= ${char}`)
//     break;
//   }
//   else{
//     outline[char]=1
//   }
// }
// outcome={}
//   for(let char of pattern){
//     if(char in outcome){
//       console.log(char)
//       break;
//     }
//     else{
//       outcome[char]=1
//     }
//   }

//Task 2
//display number count
// numArray = [10,20,30,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]
// //output = {10:2,20:4,30:3,40:2,50:2,60:2,70:2,80:1}
// o={}
// let r=numArray.forEach(num=>o.hasOwnProperty(num)?o[num]+=1:o[num]=1)
// console.log(o)
// out = {}
// let result = numArray.forEach(num => out.hasOwnProperty(num) ? out[num] += 1 : out[num] = 1)
// console.log(out)
// ou = {}
// let res = numArray.forEach(num => num in ou ? ou[num] += 1 : ou[num] = 1)
// console.log(ou)

// nexT question array of object
weatherData = [
  { district: 'Thrissur', temp: 32 },
  { district: 'Kottayam', temp: 29 },
  { district: 'Palakkad', temp: 34 },
  { district: 'Ernakulam', temp: 33 },
  { district: 'Thrissur', temp: 29 },
  { district: 'Kottayam', temp: 30 },
  { district: 'Palakkad', temp: 32 },
  { district: 'Ernakulam', temp: 31 }
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
//  empt={}
// weatherData.forEach(districtDetails=>{
//   //create a empty output object
//   const district=districtDetails.district
//   const currtemp=districtDetails.temp
//   //check district is in output
//   if(empt.hasOwnProperty(district)){
//     const oldtemp=empt[district]
//     //district present :compare temp,update district value as its higher value
//     if(currtemp>oldtemp){
//       empt[district]=currtemp
//     }
//     else{
//       empt[district]=oldtemp
//     }
//   }else{
//     empt[district]=currtemp
//   }
//   //district not present :add district and temp to output

// })


// // display
// console.log(empt);
// 2. practices
// oulord={}
// weatherData.forEach(data=>{
//   const dist=data.district
//   const normaltemp=data.temp
//   if(oulord.hasOwnProperty(dist)){
// const oldtemps=oulord[dist]
//     if(normaltemp>=oldtemps){
//       oulord[dist]=normaltemp
//     }else{
//       oulord[dist]=oldtemps
//     }
//   }else{
//     oulord[dist]=normaltemp
//     }
//   }
// )
// console.log(oulord)

// out={}
// weatherData.forEach(data=>{
//   const dis=data.district
//   const currtemp=data.temp
//   if(out.hasOwnProperty(dis)){
//     const oldtemp=out[dis]
//     if(currtemp>=oldtemp){
//       out[dis]=currtemp
//     }else{
//       out[dis]=oldtemp
//     }
//   }else{
//     out[dis]=currtemp
//     }
//   }
// )
// console.log(out)

//
// Task
// products = [
//   { pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led' },
//   { pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led' },
//   { pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led' },
//   { pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd' },
//   { pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd' }
// ]

// //1. print product name only
// products.forEach(p=>console.log(p.pName))

//   products.map(product=>console.log('all product name',product.pName))
// //2. print all mobile details whose display is lcd-filter

// console.log(products.filter(p=>p.display==='lcd').map(x=>x.pName))



//  console.log(products.filter(mobile => mobile.display === 'lcd').map(mobile => mobile.pName));

// //3. print 5g mobile phone name-filter
// console.log(products.filter(p=>p.band==='5g').map(d=>d.pName)
// )

//  console.log(products.filter(mobile => mobile.band === '5g').map(mobile => mobile.pName));

// //4. filter mobile based on price-reduce
// console.log(products.sort((a,b)=>b.price-a.price).map(p=>p.pName))








//  console.log(products.sort((p1,p2)=>p2.price-p1.price).map(product=>product.pName));
// //5. print costly mobile-reduce
// console.log(products.reduce((o1,o2)=>o1.price>o2.price?o1:o2).pName)



//  console.log(products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).pName)
// //6. print low cost mobile-reduce
//  console.log(`${products.reduce((p1, p2) => p1.price < p2.price ? p1 : p2).pName}`)
// console.log(products.reduce((p,r)=>p.price<r.price?p:r).pName)

//task 2
accounts = [
  {
    acno: 1000, ac_type: 'savings', balance: 45000, transaction: [
      {
        to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
      },
      {
        to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
      },
      {
        to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
      },
    ]
  },
  {
    acno: 1001, ac_type: 'current', balance: 30000, transaction: [
      {
        to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay'
      },
      {
        to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay'
      },
      {
        to: 1003, amount: 10000, msg: 'emi', mode: 'neft'
      },
    ]
  },
  {
    acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
      {
        to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay'
      },
      {
        to: 1001, amount: 2000, msg: 'emi', mode: 'neft'
      },
      {
        to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
      },
    ]
  },
  {
    acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
      {
        to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
      },
      {
        to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
      },
      {
        to: 1000, amount: 1000, msg: 'recharge', mode: 'phonePay'
      },
    ]
  }
]

//1. total number of accounts
console.log('total number of accounts');
console.log(accounts.length)

console.log('---------------');
//2. print account number whose ac_type is savings
console.log('print account number whose ac_type is savings');
console.log(accounts.filter(p=>p.ac_type==='savings').map(p=>p.acno))

console.log('---------------');
//3.print the balance of accnount number 1000
console.log('print the balance of accnount number 1000');

console.log('---------------');
//4. print all gpay transactions
console.log('print all gpay transactions');

console.log('---------------');
//5. print all transaction whose amount > 5000
console.log('print all transaction whose amount > 5000');

console.log('---------------');
//6. print credit transaction of account 1002
console.log('print credit transaction of account 1002');

console.log('---------------');
//7. print debit transaction of account 1002
console.log('print debit transaction of account 1002');

console.log('---------------');
//8. print transaction history of 1002
console.log('print transaction history of 1002');

console.log('---------------');
//9. print highest balance account details
console.log('print highest balance account details');

console.log('---------------');


