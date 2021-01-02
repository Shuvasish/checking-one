'use strict';

// const bookings = [];
// const createBooking = function (flightNum, passengersNum, price) {
//   flightNum = flightNum || 5;
//   passengersNum = passengersNum || 50;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     passengersNum,
//     price,
//   };
//   bookings.push(booking);
//   console.log(bookings);
// };
// createBooking('shuvo', 22, 222);

// const flight = 'LH24';
// const jonas = {
//   name: 'shuvasish Talukder shuvo',
//   passport: 123445655,
// };

// const checkIn = function (flightNum, passenger) {
//   //
//   flightNum = 'GK33';
//   passenger.name = 'Mr ' + passenger.name;
//   if (passenger.passport === 123445655) {
//     alert('welcome ' + passenger.name + flightNum);
//   } else {
//     alert('wanna get kick on your back ' + passenger.name + flightNum);
//   }
// };
// checkIn(flight, jonas);
// const nname = ['shuvo', 'di pu', 'topu'];
// const one = function (names, f) {
//   //
//   for (let i = 0; i < names.length; i++) {
//     f(names[i]);
//   }
// };
// const two = function (i) {
//   console.log(i);
// };
// one(nname, two);
// // one('shuvasish', two);
// const oneWord = function (str) {
//   str = str.replace(/ /g, '').toLowerCase();
//   //   console.log(str);
//   return str;
// };
// // console.log(oneWord('sh sl lsKQ'));
// console.log();
// one(nname, oneWord);
// const upperFirstWord = function (str) {
//   //   str = str.replace(str[0], str[0].toUpperCase());
//   //   console.log(str);
//   //   return str;
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function (str, fn) {
//   //
//   console.log(`original string: ${str}`);
//   console.log(`tranformed string: ${fn(str)}`);
//   console.log(`tranformed bt: ${fn.name}`);
// };
// transformer('shuv asish talukder', upperFirstWord);
// transformer('shuv asish talukder', oneWord);
// ['shv', 'vo', 'tan'].forEach(e => {
//   console.log(e);
// });
// const one = (str, fn) => {
//   console.log(str);
//   str = 'shuvasish';
//   return ti => {
//     return str + ' ' + ti;
//   };
// };

// console.log(one('shuvo', 'a')('talukder'));
// const oneo = s => s => s => s => s;
// const s = oneo('s');
// const lufthansa = {
//   name: 'lufthansa',
//   iatacode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.name} flight: ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
//   },
// };
// lufthansa.book(1612020069, 'Shuvasish');
// const lul = {
//   name: 'Euro',
//   iatacode: 'EU',
//   bookings: [],
// };
// const book = lufthansa.book;
// book.call(lul, 22, 'dd');
// lufthansa.book.call(lul, 25, 'talukder');

// lul.book = book.bind(lul);
// lul.book(13, 'dipu');
// lul.book(131, 'topu');

// const bookte = book.bind(lul, undefined, 'shuvasish talukder');
// bookte('shute');
// let i = 0;
// lufthansa.planes = 300;
// lufthansa.byePlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // document.querySelector('.buy').addEventListener('click', lufthansa.byePlanes);
// const as = document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.byePlanes.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate - value;
// const addVat = addTax.bind(null, 0.2);

// const addTaz = function (rate) {
//   return function (value) {
//     return value + value * rate - value;
//   };
// };

// console.log(addTaz(25000)(0.57));

// console.log(addTax(0.57, 25000));
// const addVaz = addTaz(0.57);

// console.log(addVaz(10000));
// console.log(addTax(0.57, 21000));
// console.log(addTax(0.57, 16000));

// console.log(addVat(16000));
// console.log(addVat(21000));

const poll = {
  question: 'What is your favorate programming language?\n',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answer: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const showTextInPrompt = () => {
    let str = this.question;
    for (const opt of this.options) {
      str += opt + '\n';
    }
    return str + '(Write opton number)';
  };
  const answer = Number(prompt(showTextInPrompt()));
  if (answer >= 0 && answer <= 3) {
    if (answer === 0) {
      this.answer[answer]++;
    } else if (answer === 1) {
      this.answer[answer]++;
    } else if (answer === 2) {
      this.answer[answer]++;
    } else if (answer === 3) {
      this.answer[answer]++;
    } else {
      console.log('make sense');
    }
  }
  //   console.log(this.answer);
  let a = '';
  for (let i = 0; i < this.answer.length; i++) {
    a += this.answer[i] + ', ';
  }
  this.displayResults(a);
};
poll.displayResults = function (type) {
  //
  if (typeof type === 'object') {
    console.log(type);
  } else {
    console.log('Poll results are ' + type);
  }
};
// poll.showQuestion(poll);
const tem = [5, 2, 3];
console.log(poll.displayResults.bind(this)(tem));
console.log(poll.displayResults.bind(this)([1, 5, 3, 9, 6, 1]));
//  [5,2,3]
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const secureBooking = function () {
//   let passenger = 0;
//   return function () {
//     passenger++;
//     console.log(passenger);
//   };
// };

// const book = secureBooking();
// book();
// book();
// book();
// book();
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
// (document.querySelector('body').addEventListener('click', function () {

// }))
