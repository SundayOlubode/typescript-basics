let num1Elem = document.getElementById('num1') as HTMLInputElement;
let num2Elem = document.getElementById('num2') as HTMLInputElement;
let buttonElem = document.querySelector('button')!;

type NumOrStr = number | string;
type Result = { val: number; timestamp: Date }

interface ResObj {
    val: number;
    timestamp: Date
}

const addTwo = (num1: NumOrStr, num2: NumOrStr) => {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') return num1 + num2
    if (typeof (num1) === 'string' && typeof (num2) === 'string') return num1 + num2
    return +num1 + +num2
}

const numRes: Array<number> = []
const textRes: string[] = []

const printRes = (resultObj: ResObj) => { //ResObj | Result
    return resultObj.val
}

buttonElem.addEventListener('click', () => {
    let num1 = num1Elem.value;
    let num2 = num2Elem.value;

    let res = addTwo(+num1, +num2)
    numRes.push(res as number)

    let stringres = addTwo(num1, num2)
    textRes.push(stringres as string)

    console.log(res);
    console.log(stringres);
    printRes({ val: res as number, timestamp: new Date() })

    console.log(numRes, textRes);
})

const myPromise = new Promise((resolve, reject) => {
    setTimeout
})