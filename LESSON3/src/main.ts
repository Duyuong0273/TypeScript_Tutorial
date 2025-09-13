let stringArr = ['one', 'hey', 'Duy']

let guitars = ['Start', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]


stringArr[0] = "Anh"

stringArr.push('Louis')


guitars[0] = 1911

guitars.unshift('Jim')


let test = []
let bands: string[] =[]
bands.push("Duy")

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]


/** 
 * myTuple = mixed
 * Tuple = mảng cố định số phần tử & kiểu theo vị trí.
 * Array thường = mảng linh hoạt, không đảm bảo số phần tử & thứ tự kiểu.
 */

myTuple[1] = 42

//Objects

let myObj: object
myObj = []

console.log(typeof myObj);

myObj = bands
myObj = {}

const exampleObj = {
    prop1: "Duy",
    prop2: true
}

exampleObj.prop1 = "John"


type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Duy",
    active: false,
    albums: [1984, 5151, 'OB81']
}

let jp: Guitarist = {
    // name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'III']
}

evh = jp


const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toLocaleUpperCase()}!`
    }
    return 'Hello!'
    
}

console.log(greetGuitarist(evh));

//Enums

/**
Enum (Enumeration): tập hợp các hằng số có tên, giúp code dễ đọc và dễ quản lý hơn.
Dùng khi có một nhóm giá trị cố định (như trạng thái, vai trò, hướng...).
 */

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U);