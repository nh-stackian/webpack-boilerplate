// const a = 7;
// const b = 8;
// console.log(a + b);
// let x = 5;
// if (true) {
// 	let x = 10;
// 	console.log(x);
// }
// console.log(x);

//==============================================
//****************
// Arrow Function
//****************

// const name = 'Nusaiba',
// 	age = '5',
// 	email = 'mymail@email.com';
// const details = `My name is ${name}.
// I'm ${age} years old.
// My email address is ${email}`;
// console.log(details);

// const a = 4;
// const b = 6;

// const add = (x, y) => x + y;
// console.log(add(a, b));

// const sqr = (x) => x * x;
// console.log(sqr(3));

// const print = () => {
// 	console.log(`hello Arrow function!!`);
// };
// print();
//===============================================
//*****************
//lexical this
//*****************
//  es5
//~~~~~~
// const obj = {
// 	name: `ayra store`,
// 	print: function() {
// 		setTimeout(
// 			function() {
// 				console.log(this);
// 			}.bind(this),
// 			1000
// 		);
// 	}
// };
// obj.print();

//  es6+
//+++++++
// const obj = {
// 	name: `ayra store`,
// 	print: function() {
// 		setTimeout(() => {
// 			console.log(this);
// 		}, 5000);

// 	}
// };
// obj.print();

// enhance obj
// let name = `Ayra Store`;
// let email = `ayra11@qmail.com`;

// const cat = {
// 	name,
// 	email,
// 	print() {
// 		console.log(this.name, this.email);
// 	}
// };
// cat.print();
// console.dir(cat);
// let name = `Ayra Store`;
// let email = `ayra11@qmail.com`;

// const cat = {
// 	name,
// 	email,
// 	print() {
// 		console.log(this.name, this.email);
// 	}
// };
// cat.print();
// console.dir(cat);

// ======================
//destructuring
//=======================
// const arr = [ 2, 43, 22 ];
// let [ a, b, c ] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// //------------------------------
// const obj = {
// 	name: ` ayra store`,
// 	website: ` ayrastore.com `
// };
// let { name, website } = obj;
// console.log(name, website);
// function print(name, website) {
// 	console.log(`best store in maijdee ${name} . Their site is ${website}.`);
// }
// print(name, website);

// const obj = {
// 	name: ` ayra store`,
// 	website: ` ayrastore.com `
// };
// let { name, website } = obj;
// console.log(name, website);
// function print({ name, website }) {
// 	console.log(`best store in maijdee ${name} . Their site is ${website}.`);
// }
// print({ website, name });
//==============================

// function sum(...sum) {
// 	console.log(sum);
// }

// sum(12, 12, 56, 56, 85);

// ----------------------------
//rest operator
// function sum(...num) {
// 	return num.reduce((a, b) => a + b);
// }
// let add = sum(15, 4, 4, 89, 6, 5, 99, 6, 65);
// console.log(add);
//----------------------

//spread operator
// let arr = [ 51, 5454, 5, 5, 15.5, 5 ];
// console.log(...arr);
// arr = [ 54, 22, 63, 55, ...arr, 55, 5, 2, 5 ];
// console.log(arr);
// // ----
// const obj = {
// 	name: `ayra manjil`,
// 	holding: `4541`
// };

// const obj2 = {
// 	...obj
// };
// console.log(obj2);

//-------------------------
//module
// import * as math from './math';

// console.log(math.add(3, 3));
//------------------------
// import { add, mod } from './math';

// console.log(mod(3, 3));

//-----------------------
//class - module
// import Person from './person';
// let p1 = new Person('nusaiba', 'gjhd@jdshj.com');
// console.log(p1.name  );
// p1.print();
//-----------------------
// class - inheritence
// import Student from './student.js';
// let st1 = new Student(`Arman Hossain`, `arh989@gmail.com`, `170628`);
// st1.welcome();
