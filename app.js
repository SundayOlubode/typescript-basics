"use strict";
let num1Elem = document.getElementById('num1');
let num2Elem = document.getElementById('num2');
let buttonElem = document.querySelector('button');
const addTwo = (num1, num2) => {
    if (typeof (num1) === 'number' && typeof (num2) === 'number')
        return num1 + num2;
    if (typeof (num1) === 'string' && typeof (num2) === 'string')
        return num1 + num2;
    return +num1 + +num2;
};
const numRes = [];
const textRes = [];
const printRes = (resultObj) => {
    return resultObj.val;
};
buttonElem.addEventListener('click', () => {
    let num1 = num1Elem.value;
    let num2 = num2Elem.value;
    let res = addTwo(+num1, +num2);
    numRes.push(res);
    let stringres = addTwo(num1, num2);
    textRes.push(stringres);
    console.log(res);
    console.log(stringres);
    printRes({ val: res, timestamp: new Date() });
    console.log(numRes, textRes);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It is working');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(' '));
});
