const person ={name:'Jack William', ages:18,job:'facebooker' ,gfName:'Emma Watson',adress:'koch khet',phone:0097689998, friend:['Tom harry' ,'Tom', 'Jerry','burry']};
// const gfName =person.gfName;
// const phone =person.phone;

const { phone} = person;

// const complexObject ={
//     name:'abc',
//     info:{
//         adress:'kola bagan',
//         leader:'bhai'
//     }
// }
// const {leader} =complexObject.info;

// console.log(gfName ,phone,adress,salary);
// console.log(gfName,phone,adress,salary);
// console.log(gfName,phone,adress,salary);

const friends =['sakib','arman','beiman','uman'];
const [chotofriend , nextfriend, ...restfriend] =friends;
console.log(restfriend);

