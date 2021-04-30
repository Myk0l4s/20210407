
let arr1 = [
    'Mykolas',
    {
        type: 'Mr',
        age: 29
    },
    true,
    function () {
        return console.log('Labas!');
    }
];

console.log(arr1);
console.log('--------------');

console.log(arr1[1].age);
// arr1[3](); 

// let arr = [2, 3, 4, 5, 7];


//! Daugiamaciai masyvai

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(arr2[1][1]);


// let arr0ne = [
//     'Arturas', //[0]
//     'Tomas', //[1]
//     'Petras', //[2]
//     'Jonas' //[3]
// ];

//masyvai turi tokia savybe kaip: LENGHT;

let arr4 = ['Pirmas', 'Antras', 'Trecias'];

console.log(arr4.lenght);
//!======================================
//!======================================

// Metodai !!!!
//! POP pasalina paskutini   arr4.pop
                                            // Veikia greitai
//? PUSH visada prideda i gala   arr4.push

//! UNSHIFT prideda i prieki   arr4.unshift
                                                //  Veikia letai, nes viska turi perkelti i naujas vietas ir pan
//? SHIFT pasalina pirma elementa   arr4.shift


let arr7 = ['Pirmas', 'Antras', 'Trecias'];

arr7.unshift('ooo');
// arr7.push('111');

console.log(arr7);


let arr8 = ['Pirmas', 'Antras', 'Trecias'];

delete arr8[1];
console.log(arr8);
console.log(arr8[1]);
console.log(arr8.length);
//!======================================
//!======================================

//Splice padeda: prideti, pasalinti ir pakeisti

// Splice(1,1) nuo kur iki kiek elem

let arr9 = ['Pirmas', 'Antras', 'Trecias'];

arr9.splice(1, 1);

// console.log(arr9);

//!======================================

// Pasalinti galima issaugoti kint.

let arr10 = ['Pirmas', 'Antras', 'Trecias'];

let removed = arr10.splice(1, 1);

// console.log(arr10);
// console.log(removed);

//!======================================

let arr11 = ['Pirmas', 'Antras', 'Trecias'];

arr11.splice(2, 1, '01'); //vienas

// console.log(arr11);

arr11.splice(1, 0, ':D', ';('); //du, o 0 prideti 2

// console.log(arr11);

//!======================================


//? slice - kopijuoja

let arrrr1 = [1, 2, 3, 4, 5];

let xs = arrrr1.slice(0, 2);  //arba be skaiciu jeigu visas

console.log(xs);

//!======================================

// Concat - sukuria nauja masyva i kuri kopijuoja duomenys is kitu masyvu

let arrr1 = [1, 2, 3, 4, 5, 6, 7, 8];

let arrr1New = arrr1.concat('PUSH');

console.log(arrr1New);

//!======================================

//? vietoj find (filter) visus grazina
//? Find grazina tik pirma true, filter grazina visus, kurie true
let arrObj = [
    { name: 'Paulius', age: 30 },
    { name: 'Arturas', age: 10 },
    { name: 'Simona', age: 20 },
    { name: 'Tomas', age: 20 },
];

let result = arrObj.find(function (item, index, array) {
    return item.age === 20;
});

// console.log(result);

//!======================================

// arrow function

let result = arrObj.find(item => item.age === 20);

//!======================================

