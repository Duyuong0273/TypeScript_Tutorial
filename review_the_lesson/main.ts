//#1: static types

let userName = "Duy";
console.log(typeof userName);

//#1:  types any

let userNumber: any;
userNumber = "ba";
userNumber = 4;

// #3: Những kiểu căn bản trong TS

let catName: string = "miu miu";
let catAge: number = 1;
let isCute: Boolean = true;

catName = "meo meo";
catAge = 3;
isCute = true;

// #4: array - mảng
let ratings: number[] = [5, 4, 3, 5];
let petNames: string[] = ["Miu", "Cún", "Chíp"];

let ratings2: Array<number> = [5, 4, 3, 5];
let petNames2: Array<string> = ["Miu", "Cún", "Chíp"];

let martrix: number[][] = [
  [1, 2],
  [0, 1],
  [2, 4],
];
let martrix2: Array<Array<number>> = [
  [1, 2],
  [0, 1],
  [2, 4],
];

// #5 function
function sayHi() {
  return "Xin chào, chúc bạn học lập trình vui vẻ!";
  // console.log("Xin chào, chúc bạn học lập trình vui vẻ!");
}

function double(num: number): number {
  return num * 2;
}

function greet(name: string, title?: string) {
  if (title) {
    return `Xin chao ${title} ${name}`;
  }
  return `Xin chao ${name}`;
}

console.log(greet("Duy"));

function gatjerFriends(groupName: string, ...members: string[]) {
  console.log(`Nhom: ${groupName}`);
  console.log(`Thanh vien: ${members.join(", ")}`);
}

gatjerFriends("Di bien", "An", "Binh", "Duy");

//#6 type Aliases

export type Customer = {
  id: number;
  name: string;
};

export type Userresponse = {
  success: boolean;
  message: string;
};

// function greetCustomer(customer: {
//     id: number,
//     name: string,
// }) : {
//     success: boolean,
//     message: string,
// } {
//     return {
//         success: true,
//         message: `Xin chao ${customer.name}, cam o ban da den voi cua hang`
//     }
// }

function greetCustomer(customer: Customer): Userresponse {
  return {
    success: true,
    message: `Xin chao ${customer.name}, cam o ban da den voi cua hang`,
  };
}

type SupportFunction = (customer: Customer) => Userresponse;

const greetCustomer2: SupportFunction = (customer) => {
  return {
    success: true,
    message: `Xin chao ${customer.name}, cam o ban da den voi cua hang`,
  };
};

const farewellCustomer: SupportFunction = (customer) => {
    return {
        success: true,
        message: `Xin chao ${customer.name}, cam o ban da den voi cua hang`
    }
}

// #7 Union & Literal Types

type UserId = number | string;

function getTicketInfo(id: string | number){
    if(typeof id === "string") {
        return `Tim ve voi ID: ${id.toLocaleUpperCase()}`
    }else{
        return `Tim ve voi ID: ${id.toFixed(0)}`
    }
}

getTicketInfo(123)


let mixedArray: (string | number)[] = [1, 2, 'ba', 'bon']

mixedArray.push(5)
// mixedArray.push(false)


type UserType = {
    userName: string;
    age: number;
    phone: string,
    theme: string
};


type UserType2 = {
    userName: string;
    age: number;
    phone: string,
    theme: "dark" | "light"
};

// literal type

const u2: UserType2 = {
    userName: "Duy",
    age: 22,
    phone: "0-123-456",
    theme: "dark"
}

type paymentMethods = "zalopay" | "mono" | "cod";
type APIMethods = "GET" | "PUT"| "POST" | "DELETE" ;

// #8: IntersectionTypes (&)

type Person = {
    name: string,
}

type Worker = {
    job: string;
}

type Employee = Person & Worker

const e1: Employee = {
    name: "Duy",
    job: "Dev"
}

// type AdminUser = {
//     name: string,
//     email: string,
//     role: "admin",
//     permissions: string[]
// }

type AdminRights = {
    role: "admin"
    permissons: string[];
}

type MemberRights = {
    role: "member";
    points: number;
}

type AdminUser = Person & AdminRights & {
    email: string
}

type MemberUser = Person & MemberRights

// never type

type OrderStatus = "pending" | "shipper" | "delivered"

function handleOrderStatus(status: OrderStatus){
    if(status === "pending"){
        console.log("Don hang ban dang duoc xu li");
    } else if (status === "shipper"){
        console.log("Don hang ban da duoc gui di");
    }else if (status === "delivered"){
        console.log("khach da  nhan hang");
    }else{
        //truong hop ko bao gio xay ra
        // const check: never = status;

        const check = status
    }
}
 
// #9 Interface

interface IUser {
    userName: string,
    email: string,
    age: number
}

type User = {
    userName: string,
    email: string,
    age: number
}

const user: IUser = {
    userName: "hung",
    email: "@gmail.com",
    age: 30
}

type UserName = string;

type Users = Object[];

type directions = "north" | "south" | "east" | "west"

// #9 inherintance (tính kế thừa)

interface IUser{
    name: string,
    age: number,
}

interface IEmployee {
    job: string;
    salary: number
}

interface IStaff extends IUser, IEmployee {
    department:string
}

const staff1: IStaff = {
    name: "Lan",
    age: 24,
    job: "Tester",
    salary: 900,
    department: "QA",
    userName: "",
    email: ""
}

// #10: Generic

// T: DataType, U: MetaType
// T, U, K, V

interface IPost<T, U> { 
    id:number,
    title: string,
    description: string
    extra: T[],
    meta : U;
}

interface IAuthor{
    userId: number,
    username: string,
}

interface ICategory {
    categoryId: number,
    categoryTitle: string
}

const postWithTags: IPost<string> = {
    id: 1,
    title: "Hello",
    description: "Test",
    extra: ["tag1", "tag2"],
    meta: 2025
}

const postWithAuthors: IPost<IAuthor> = {
    id: 2,
    title: "Co tac gia",
    description: "Cool stuff",
    extra: [
        {userId: 1, username: "Alice"},
        {userId: 2, username: "Bob"}
    ]
}

const postWithCategories: IPost<ICategory> = {
    id: 3,
    title: "Co category",
    description: "Another me",
    extra: [
        {categoryId: 10, categoryTitle: "Tech"},
        {categoryId: 11, categoryTitle: "Travel"}
    ]
}