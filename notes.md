### LESSON 1 ###

## Typescript là gì ?
- Là một ngôn ngữ lập trình do Microsoft phát triển, mở rộng từ
Javascript với đặc điểm  nổi bật là có hệ thống kiểu tĩnh (static typing)

## Nói đơn giản là 
👉 TypeScript = JavaScript + kiểu dữ liệu + tính năng mới

### LESSON 2 ###
- Trong TypeScript, có một số kiểu dữ liệu cơ bản (basic types) mà bạn sẽ dùng thường xuyên. Đây là nền tảng để viết code an toàn hơn so với JavaScript.

### LESSON 3 ###

## Array & Object

1. Array (mảng)

- Là mảng chứa nhiều giá trị cùng kiểu dữ liệu

### Cách khai báo:

## Cách 1: dùng []
let numbers: number[] = [1, 2, 3];

## Cách 2: dùng generic Array<type>
let fruits: Array<string> = ["apple", "banana", "cherry"];

### Mảng hỗn hợp kiểu (union type):
let mixed: (number | string)[] = [1, "two", 3];

Một số thao tác với mảng:

let nums: number[] = [10, 20, 30];

nums.push(40);        // thêm phần tử
console.log(nums[0]); // lấy phần tử đầu tiên
console.log(nums.length); // độ dài mảng

2. Object (đối tượng)

- Đối tượng là tập hợp các cặp key: value. Trong TypeScript, bạn có thể định nghĩa kiểu rõ ràng.

### Cách khai báo:

let user: { name: string; age: number } = {
  name: "Duy",
  age: 22,
};


### Dùng ? cho thuộc tính tùy chọn:

let user2: { name: string; age?: number } = {
  name: "Linh", // age có thể có hoặc không
};

### Dùng readonly cho thuộc tính chỉ đọc:

let user3: { readonly id: number; name: string } = {
  id: 1,
  name: "Hoa",
};

// user3.id = 2; ❌ lỗi vì id chỉ đọc


### Object lồng nhau:

let employee: {
  name: string;
  job: { title: string; salary: number };
} = {
  name: "Nam",
  job: {
    title: "Developer",
    salary: 1500,
  },
};

#### 👉 Tóm gọn:

- Array: dùng để chứa nhiều giá trị (cùng hoặc khác kiểu).

- Object: dùng để mô tả dữ liệu có thuộc tính cụ thể.

### LESSSON 4: Fuction ###

1. Tổng quan
- Function là đơn vị chứa logic nhận tham số trả về giá trị (hoặc không)

- TypeScript thêm kiểu vào cho tham số và kiểu trả về, giúp phát hiện lỗi khi biên dịch thay vì lúc chạy

2. Cấu trúc cơ bản

function name(param1: Type1, param2: Type2): ReturnType {
  // body
}

+ param: Type: kiểu của tham số.

+ ): ReturnType: kiểu giá trị trả về. Nếu không trả về gì thì dùng void. Nếu hàm luôn ném lỗi thì never.

3. Kiểu trả về (Return Type) và inference

TypeScript suy luận kiểu trả về từ return nếu bạn không khai báo.

Tuy nhiên nên khai báo rõ ràng : ReturnType cho hàm xuất khẩu (exported) để dễ bảo trì và tránh suy luận sai.

Ví dụ: function f(): number { return 1; } — rõ ràng.


### LESSSON 4: Assertions ###

- Type assertion trong TypeScript cho phép bạn nói với compiler rằng:

    "Hãy coi giá trị này như kiểu X đi, tôi biết rõ hơn compiler"
- Nó không thay đổi giá trị thật sự khi run time (chạy trên JS) mà chỉ tác động đến type checking ở compile-time

=> Đây là cách ép kiểu trong TS