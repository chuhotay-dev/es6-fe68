/**
 * Khai báo biến
 * - Khai báo biến với let và const
 * - So sánh giữa var .vs let .vs const (hoisting, scope)
 * + var: có hoisting, function scope
 * + let, const: không có hoisting, block scope
 * + const: bắt buộc phải gán giá trị khi khai báo và không được re-assign giá trị
 * - Nên dùng cái nào trong trường hợp nào?
 * + var: khi browser không hỗ trợ (let, const)
 * + let: khi cần re-assign giá trị
 * + const: khi không cần re-assign giá trị
 */

// 1. var
// console.log(fullName); // work (undefined) => hoisting
// fullName = 'Chu Ho Dong';
// console.log(fullName);
// var fullName = 'Chu Ho Tay';
// age = 18; // work (không cần dùng từ khoá khai báo)
// console.log(fullName, age);

// function showErrorWithVar() {
//     var isError = true;
//     var error = '';

//     if (isError) {
//         var error = 'Something went wrong!';
//         console.log(error);
//     }

//     console.log(error);
//     console.log(fullName); // ? work
// }

// showErrorWithVar();

// 2. let
// console.log(age); // toang (Err: Cannot access 'age' before initialization);
// let age = 18;
// console.log(age); // work (18)
// let age = 19;
// console.log(age); // toang (Err: Identifier 'age' has already been declared);

// function showErrorWithLet() {
//     let isError = true;
//     let error = '';

//     if (isError) {
//         let error = 'Something went wrong!';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithLet();

// 3. const
// console.log(birthYear); // toang (không có hoisting)
// const birthYear = 2000;
// const birthYear; // toang (bắt buộc phải gán giá trị khi khai báo)
// const fullName = 'Chu Ho Tay';
// fullName = 'Chu Ho Dong'; // toang (không gán lại giá trị cho hằng số được)

// function showErrorWithConst() {
//     const isError = true;
//     const error = '';

//     if (isError) {
//         const error = 'Something went wrong!';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithConst();

/**
 * Function
 * - Arrow function
 * - So sánh declaration .vs expression (normal func) .vs arrow func (cú pháp, con trỏ this)
 * - Trường hợp nên và không nên dùng arrow func?
 * + Không sử dụng arrow func làm phương thức của một object
 */

// Normal func
// const calcAgeNormal = function(birthYear) {
//     console.log(this); // this = global object (window)
//     console.log(2021 - birthYear);
// }

// calcAgeNormal(2000);

// Arrow func
// - Không định nghĩa bối cảnh thực thi (this) của riêng nó
// - Không quan tâm nó được thực thi trong ngữ cảnh nào, giá trị this của arrow func = this của outer func
// - Nếu không có  outer func thì this = global object (window)
// - Không dùng arrow func làm phương thức của object
// - Không dùng arrow func làm func constructor

// const calcAgeArrow = (birthYear) => {
//     console.log(this);
//     return 2021 - birthYear;
// }

// calcAgeArrow(2000);

// const calcAgeArrowShort = (birthYear) => 2021 - birthYear;

// const calcAgeArrowOneParam = birthYear => 2021 - birthYear;

// const getEle = id => document.getElementById(id);

// const student = {
//     name: 'Tay',
//     birthYear: 2000,

//     calcAgeNormal: function() {
//         console.log('calcAgeNormal', this);
//         console.log(2021 - this.birthYear);

//         // const _this = this;

//         // const checkAgeNormal = function() {
//         //     console.log('checkAgeNormal', this);
//         //     if (2021 - this.birthYear >= 18) {
//         //         console.log('You are old enough!')
//         //     } else {
//         //         console.log('You are not old enough!');
//         //     }
//         // }.bind(student);

//         const checkAgeArrow = () => {
//             console.log('checkAgeArrow', this);
//             if (2021 - this.birthYear >= 18) {
//                 console.log('You are old enough!')
//             } else {
//                 console.log('You are not old enough!');
//             }
//         }

//         checkAgeArrow();
//     },

//     calcAgeArrow: () => {
//         console.log(this); // window
//         console.log(2021 - this.birthYear);
//     }
// }

// student.calcAgeNormal();
// student.calcAgeArrow();

// const People = () => {

// }

// const person = new People();

/**
 * Default Parameter
 */
// const withoutDefaultParam = (typeOfUser) => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page!')
//     } else {
//         console.log('Redirect to admin page!');
//     }
// }

// withoutDefaultParam('user');

// const withDefaultParam = (typeOfUser = 'user') => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page!')
//     } else {
//         console.log('Redirect to admin page!');
//     }
// }

// withDefaultParam('admin');

/**
 * Destructuring
 * - Destructure Array
 * - Destructure Object
 */

// Array
// Without Destructuring
// const students = ['Tay', 'Y', 'Vy'];
// const tay = students[0];
// console.log(tay);
// const vy = students[2];
// console.log(vy);

// With Destructuring
// const students = ['Tay', 'Y', 'Vy'];
// const [tay, y, vy] = students;
// const [,y,vy] = students;
// console.log(y, vy);

// Object
// Without Destructuring
// const student = {
//     fullName: 'Chu Ho Tay',
//     age: 18,
//     class: 'BC12'
// }

// const fullName = student.fullName;
// const age = student['age'];
// console.log(fullName, age);

// With Destructuring
// const student = {
//   fullName: 'Chu Ho Tay',
//   age: 18,
//   class: 'BC12',
// };

// const { age, fullName, class: className } = student;

// console.log(fullName, age, className);

/**
 * Template String
 */

// const fullName = 'Nhu Y';
// const str = 'My name is ' + fullName;
// const templateStr = `My name is ${fullName}`;

/**
 * Enhanced Object Literals (Shorthand syntax)
 */
// const age = 18;

// const person = {
//     fullName: 'Chu Ho Guom',
//     age: age,

//     calcAge: function() {

//     }
// }

// const enhancedPerson = {
//     fullName: 'Chu Ho Guom',
//     age, // age: age

//     calcAge() {

//     }
// }

/**
 * Rest parameter
 */

// const calcSum = (num1, num2, num3) => console.log(num1 + num2 + num3);

// calcSum(1, 2, 3);

// const calcSum = (...nums) => {
//     let sum = 0;
//     nums.forEach(num => {
//         sum += num;
//     });
//     console.log(sum);
// }

// calcSum(1, 2, 3);

/**
 * Spread operator
 * - Copy Array
 * - Copy Object
 * - Tham trị (các kiểu dữ liệu nguyên thuỷ) .vs tham chiếu (array, object)
 * - Merge array
 * - Thêm phần tử vào mảng
 * - Sử dụng array nhu danh sách các tham số của func
 */

// const people = ['Tay', 'Y', 'Vy'];
// console.log(people[0], people[1], people[2]);
// console.log(...people);
// console.log('Tay', 'Y', 'Vy');

// Copy array
// let nums1 = [1, 2, 3];
// let nums2 = nums1;

// nums2.push(4);
// console.log(nums2);
// console.log(nums1);

// let nums1 = [1, 2, 3];
// let nums2 = JSON.parse(JSON.stringify(nums1));

// nums2.push(4);

// console.log(nums1);
// console.log(nums2);

// const nums1 = [1, 2, 3];
// const nums2 = [1, ...nums1, 4, 5, 6];
// nums2.push(4);
// console.log(nums1);
// console.log(nums2);

// Merge Array
// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];

// const nums3 = nums1.concat(nums2);
// console.log(nums3);

// const nums3 = [...nums1, ...nums2];
// console.log(nums3);

// Copy object
// let obj1 = {
//     a: 'a',
//     b: 'b'
// }

// let obj2 = { ...obj1, d: 'd', a: '_a' };
// obj2.c = 'c';

// console.log(obj1);
// console.log(obj2);

// Merge object

// const obj1 = {
//     a: 'a',
//     b: 'b'
// }

// const obj2 = {
//     c: 'c',
//     d: 'd'
// }

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// const users = ['Tay', 'Y', 'Vy'];

// const showUsers = (user1, user2, user3) => console.log(user1, user2, user3);
// const showUsers = (...users) => {
//     users.forEach(user => {
//         console.log(user)
//     })
// }

// showUsers(users[0], users[1], users[2]);
// showUsers(...users);

/**
 * Module
 * - import
 * - export
 */

// import SinhVienDefault, { getLocalStorage, setLocalStorage } from './utils.js';
// import * as utils from './utils';
// import SinhVienDefault from './utils.js';

// const sinhVien = new SinhVienDefault('Chu Ho Tay', 'FE68');
// console.log(sinhVien);

// getLocalStorage();
// setLocalStorage();

/**
 * Class: bản chất vẫn là 1 func
 */

// expression
// const People = class {

// }

// declaration
// class People {
//     constructor(fullName, className, birthYear) {
//         this.fullName = fullName;
//         this.className = className;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2021 - this.birthYear);
//     }
// }

class ChuyenXe {
    constructor(soXe, mauXe, taiXe) {
        this.soXe = soXe;
        this.mauXe = mauXe;
        this.taiXe = taiXe;
    }

    tinhDoanhThu() {
        console.log('Tinh doanh thu chung');
    }
}

// extends: Kế thừa thuộc tính và phương thức của lớp cha 
class ChuyenXeNoiThanh extends ChuyenXe {
    constructor(soXe, mauXe, taiXe, soTuyen) {
        // super: gọi lại phương thức constructor của lớp cha (ChuyenXe)
        super(soXe, mauXe, taiXe);
        this.soTuyen = soTuyen;
    }
    
    // Ghi đè phương thức của lớp cha (tính đa hình)
    tinhDoanhThu() {
        console.log('Tinh doanh thu chuyen xe NT');
    }

    timTuyenXeGanNhat() {
        console.log('Tim tuyen xe gan nhat');
    }
}

const chuyenXeNT = new ChuyenXeNoiThanh();
chuyenXeNT.tinhDoanhThu();
class ChuyenXeNgoaiThanh extends ChuyenXe {
    constructor(soXe, mauXe, taiXe, soNgayDi) {
        // super: gọi lại phương thức constructor của lớp cha (ChuyenXe)
        super(soXe, mauXe, taiXe);
        this.soNgayDi = soNgayDi;
    }
    
    tinhDoanhThu() {
        console.log('Tinh doanh thu chuyen xe noi thanh!')
    }

    tinhSoNgayDiDuoc() {
        console.log('Tinh so ngay di duoc');
    }
}



// const tay = new People('Chu Ho Tay', 'FE68', 2000);
// console.log(tay);

// console.log(tay.__proto__ === People.prototype);