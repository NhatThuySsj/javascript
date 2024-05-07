// var fullName = 'Nguyen Nhat Thuy';

// alert(fullName); (Thông báo)

// console.log(fullName); (Thông báo trong console)

// confirm('xác nhận bạn đủ tuổi'); (Thông báo xác nhận độ tuổi)

// prompt('xác nhận bạn đủ tuổi'); (Thông báo có input để điền thông tin và xác nhận)

// setTimeout(function() {                  (Thông báo sau 1 thời gian nhất định(Do người sáng tạo chỉ định thời gian) và xác nhận)
    //     alert('Thông báo')
    // }, 1000);                       

// setInterval(function() {
//     alert('Đây là web demo' + Math.random())
// }, 1000)                         (Thông báo lập đi lập lại nhiều lần)

// var a = 1 + 2;                   (Toán tử số học (+, -, *, /))
// console.log(a)                   

// var fullName = 'Nguyen Nhat Thuy';           (Toán tử gán ( = ))

// var a = 1;                           (Toán tử so sánh (>, <, =))
// var b = 2;

// if (a < b) {
//     alert('Đúng');
// }

// var a = 1;                           (Toán tử logic (&&))
// var b = 2;

// if (a > 0 && b > 0) {
//     alert('a & b lớn hơn 0')
// }

// Toán tử số học

// var a = 1;                   (Toán tử +)
// var b = 2;

// console.log(c = a + b);

// var a = 1;
// var b = 2;

// console.log(c = a - b);      (Toán tử -)

// var a = 1;
// var b = 2;

// console.log(c = a * b);      (Toán tử *)

// var a = 4;
// var b = 3;

// console.log(c = a ** b);     (Toán tử **)

// var a = 6;
// var b = 2;

// console.log(c = a / b);      (Toán tử /)

// var a = 7;
// var b = 4;

// console.log(c = a % b);      (Toán tử % (lấy số dư của phép chia))

// var a = 1;

// a++;

// console.log(a);              (Toán tử ++ (tăng giá trị))

// var a = 5;

// a--;

// console.log(a);              (Toán tử -- (giảm giá trị))

// var a = 6;

// console.log(a++)             (Toán tử postfix trả về kết quả coppy (Không thay đổi))

// var a = 6;

// console.log(++a)             (Toán tử prefix trả về kết quả a = a + 1 => a = 7)

// var number = 6;

// var output = number-- + ++number;

// console.log('output', output)            (Number-- (trả về coppy = 6) khi xét qua ++number thì bằng 5 (vì khi number-- xét xong thì bằng 5 nên khi xét qua bên ++number thì 5 + 1 = 6) và +1 = 6 =>  6 + 6 = 12)


// Toán tử gán
/**                     Ví dụ                   Tương đương
 * =                  x = y                     x = y
 * +=                 x += y                    x = x + y
 * -=                 x -= y                    x = x - y
 * *=                 x *= y                    x = x * y
 * /=                 x /= y                    x = x / y
 * **=                x **= y                   x = x ** y
 */

// var a = 4;

// a **= 2;

// console.log(a);              (Ví dụ về toán tử gán)

/**
 * Toán tử chuỗi - String operator
 */

// var firstName = 'Nhat';
// var lastName = 'Thuy';

// console.log(firstName + lastName);           (Ví dụ 1)

// var name = 'Thuy';

// name += ' Nhat';

// console.log(name)                            (Ví dụ 2)

/**
 * Toán tử
 * ==       --> Bằng
 * !=       --> Không bằng
 * >        --> Lớn hơn
 * <        --> Bé hơn
 * >=       --> Lớn hơn hoặc bằng
 * <=       --> Bé hơn hoặc bằng
 */

// var a = 2;
// var b = 4;

// if (a < b) {
//     console.log('Điều kiện đúng!')
// } else {
//     console.log('Điều kiện sai!')
// }                                            (Ví dụ về so sánh (có thể so sánh bằng name))

// Boolean

// var a = 1;
// var b = 2;

// var isSuccess = a < b;

// console.log(isSuccess);                      (Ví dụ về Boolean)

// If - else

/**
 * 0
 * false
 * ''-""
 * underfined                                 (Nếu if hoặc var = 1 trong 6 điều kiện này sẽ false)
 * NaN
 * null
 */

// var fullName = 'Nhat Thuy';

// if (fullName) {
//     console.log('Điều kiện đúng')
// } else {
//     console.log('Điều kiện sai')
// }                                            (Ví dụ)

/**
 * Toán tử logic
 * 1. && - And          (Điều kiện được đưa ra phải đúng hết thì sẽ hiện thông báo)
 * 2. || - Or           (1 trong những điều kiện được đưa ra đúng thì sẽ hiện thông báo)
 * 3. !  - Not          (Đúng --> Sai và Sai --> Đúng)
 */

// var a = 1;
// var b = 2;
// var c = 3;

// if (!(a < 0 && b < 0 && c == 3)) {
//     console.log('Điều kiện đúng!');
// }                                                    (Ví dụ)

/**
 * Kiểu dữ liệu trong javascript
 * 1. Dữ liệu nguyên thủy - Primitive data
 *  - Number
 *  - String
 *  - boolean
 *  - Undefined
 *  - Null
 *  - Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex Data
 *  - Function
 *  - Object
 */

// Number type
// var a = 1;
// var b = 2;
// var c = 3;                                                   (Number)

// String type

// var fullName = 'Nhat Thuy';                                  (String (khi có dấu ''))

// Boolean type

// var isSuccess = true;                                        (Boolean (true and false))

// Undefined type

// var age;                                                     (Age)

// Null type

// var isNull = null; //Nothing                                 (Null)

// symbol type

// var id = Symbol('id'); //unique
// var id2 = Symbol('id'); //unique                             (Symbol)

// Function type

// var myFunction = function() {
//     alert('Xin chào các bạn đến với web Demo');
// }                                                            (Function)

//Object type

// var myObject = {
//     name: 'Nhat Thuy',
//     age: 21,
//     adress: 'Thanh Hoa',
//     myFunction: function () {

//     }
// };
//                                                  (Lưu dữ liệu)
// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// Toán tử so sánh P2       (So sánh tuyệt đối)
/**
 * ===
 * !==
 */

// var a = 1;
// var b = '1';

// console.log(a !== b);

/**
 * Toán tử logical và câu lệnh điều kiện if
 */

// var a = 1;
// var b = 3;

// var result = 'A' && 'B' && 'C';

// if (result) {
//     console.log('Điều kiện đúng!')
// } else {
//     console.log('Điều kiện sai!')
// }                                                        (Result (&&) sẽ kiểm tra những phần tử sai và trả kết quả về là false (Nếu ko có phần tử nào sai sẽ trả về kết quả true))

// var a = 1;
// var b = 3;

// var result = false || 0 || 'C';

// if (result) {
//     console.log('Điều kiện đúng!')
// } else {
//     console.log('Điều kiện sai!')
// }                                                       (Result (||) sẽ lấy những phần tử đúng gán vào mình và bỏ qua những phần tử sai gán vào mình để trả về kết quả đúng (true) và nếu tất cả phần tử sai thì sẽ là false)

/**
 * Chuỗi trong Javascript
 */

// var fullName = 'Nhat Thuy';                             (Cách số 1 được dùng nhiều nhất)

// var fullName = 'NhatThuySsj \'onechamp\''
// console.log(fullName)                                    (Ký hiệu \\ để gợi ý)

// var fullName = 'NhatThuySsj'
// console.log(fullName.length)                             (Kiểm tra độ dài chuỗi)

// var fullName = 'bla bla bla bla bla bla bla bla bla bla bla bla'
// + 'bla bla bla bla bla bla bla'
// + 'bla bla bla bla bla bla bla bla bla'
// console.log(fullName)                                    (Chú ý độ dài của code)

// var firstName = 'Nhat';
// var lastName = 'Thuy';

// console.log('Tôi là: ' + firstName + ' ' + lastName)
// console.log(`Tôi là: ${firstName} ${lastName}`)                      (Nên sử dụng trường hợp dưới để viết code ngắn hơn và dễ nhìn và sửa lỗi)

// Làm việc với chuỗi

// var myString = 'One champ Tôn Sách'

// Tìm hiểu thêm tại: Javascript String methods

// 1. length
// console.log(myString.length)                                     (Kiểm tra độ dài)

// 2. Find index
// console.log(myString.indexOf('champ'))                           (Tìm kiếm từ, kiểm tra xem dòng đó nằm ở thứ tự nào)
// console.log(myString.indexOf('One', 3))                          (Với indexOf thì sẽ đc hỗ trợ "quy định hỗ trợ tìm kiếm")
// console.log(myString.search('One'))                              (Search không hộ trợ "quy định hộ trợ tìm kiếm")
// 3. Cut string
// console.log(myString.slice(0, 9))                                (Tìm từ với vị trí 'Cut' để hiện ra mỗi từ đó (Và có thể tìm ngược lại))
// 4. Replace
// console.log(myString.replace('One champ', 'Onechamps'))          (Replace chèn từ)
// console.log(myString.replace(/One/g, '1'))                       (/One/g là biểu thức chính quy có thể chèn tất cả các từ)
// 5. Convert to upper case
// console.log(myString.toUpperCase())                              (Tất cả chữ cái viết hoa)
// 6. Convert to lower case
// console.log(myString.toLowerCase())                              (Tất cả chữ cái viết thường)
// 7. Trim
// console.log(myString.trim())                                     (Loại bỏ khoảng trắng đầu và cuối)
// 8. Split
// var languages = 'Javascript, PHP, Ruby';
// console.log(languages.split(', '))                               (Split chia 1 chuỗi thành các chuỗi con)
// 9. Get a character by index
// console.log(typeof myString.charAt(20))                          (charAt là tìm kiếm các từ trong 1 chuỗi string)
// console.log(myString[10])                                        (Ký hiệu [] rút ngắn câu lệnh)

// Kiểu số (Number)  trong JS
// var age = 1;
// var PI = 3.14;

// var otherNumber = new Number(10);                                (Trường hợp 2 khuyến cáo không sử dụng vì (new Number) sẽ trả về kết quả object)

// console.log(typeof otherNumber)

// var result = 10 / 2;                                            (Nếu số / cho chữ cái (abc) sẽ trả về kết quả NaN)

// console.log(isNaN(result))

// var age = 14;

// console.log(typeof age.toString())                              (Câu lệnh biến number thành string)

// var age = 5.45;

// console.log(age.toFixed())                                      (Câu lệnh toFixed sẽ làm tròn số thập phân (dưới 1.49 --> 1 và trên 1.5 --> 2) và toFixed(01234) nếu thêm số trong () nó sẽ hiện ra những số thập phân bạn muốn hiện)

// Mảng Array

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     123,
// ];

// console.log(Array.isArray(languages))                           (Cách tạo Array và kiểm tra có phải là Array không? ký hiệu của Array "[]")

// Kiểm tra độ dài mảng (console.log(languages.length))
// Lấy phần tử của mảng (console.log(languages[0 hoặc 1, 2]))

/** Làm việc với mảng
 * 1. To string                      (Đưa các mảng về string)
 * 2. Join                          (Có thể thay đổi những ký tự trong mảng)
 * 3. Pop                            (Xoá phần tử cuối và trả phần tử đã xóa và nếu xóa hết phần tử thì sẽ hiện "undefined")
 * 4. Push                          (Thêm các các phần tử vào cuối mảng)
 * 5. Shift                         (Xóa phần tử đầu mảng và trả về)
 * 6. Unshift                       (Thêm phần tử vào đầu mảng)
 * 7. Splicing                      (splice là mảng xóa phần tử và thêm phầm tử (tham số thứ 1 là đặt con trỏ, tham số thứ 2 là số lượng element muốn xóa và tham số thứ 3 số lượng element truyền vào))
 * 8. concat                        (Là mảng nối các Array với nhau)
 * 9.slicing                        (slice là mảng xóa đi các phần tử đc chỉ định)
*/

// function writelog(message, message2) {
//     console.log(message);
//     console.log(message2);
// }

// writelog('jajandaw', 101010102222);              (Có thể viết nhiều phần tử trong 1 mảng (tiện ích)) - (Nếu message2 ko có phần tử sẽ trả về kết quả undefined)

// function writelog(message, message2) {
//     if (message) {
//         console.log(message)
//     }

//     if (message2) {
//         console.log(message2)
//     }
// }

// writelog('hello word', 'yaha loo');                  (Nếu cả 2 ko có phần tử sẽ không có gì hiện và nếu có phần tử mảng if sẽ hiện thông báo)

// function writelog() {
//     console.log(arguments);
// }

// writelog('in1', 'in2', 1, 2, 3, 4, 5)

// function writelog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }

// writelog('in1', 'in2', 'in3')                    (Cho các phần tử lên cùng 1 hàng với dấu "-" mỗi đơn vị)

// function cong(a, b) {
//     return '2' + '8';
// }

// var result = cong(2, 8)

// console.log(result)                              (return trả về kết quả)

// function message() {
//     function message2() {
//         var fullName = 'nbnbnbnbnb'
//         console.log(fullName)
//     }
//     message2();
// }

// message();                                       (function trong function)

// var emailKey = 'email';                              (Trường hợp đặc biệt để thêm 1 phần tử trong mảng)

// var myInfor = {
//     name: 'Nhat Thuy',
//     age: 21,
//     adress: 'Thanh Hoa, VN',
//     [emailKey]: 'nhatthuyssj@gmail.com',
//     getName: function () {                       (Function trong object chỉ gọi 1 phần tử đc kêu)
//         return this.adress;
//     }
// }

// myInfor.phone = '0987654321'                   (Thêm 1 phần tử trong mảng)

// delete myInfor.phone                          (Xóa 1 phần tử trong mảng)

// console.log(myInfor);                        (Object JS)

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }                                                                (Tạo nên 1 Object (ngôi nhà))

// var author = new User ('Nhat', 'Thuy', 'Avatar');
// var user = new User ('Thuy', 'Teo', 'Avatar');                    (Thêm những phần tử cho Object)

// author.title = 'kaiakak';
// user.comment = 'iisisisasas';                                    (Thêm phần tử cho Object)

// console.log(author.getName());
// console.log(user.getName());                                     (Kiểm tra kết quả)

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// User.prototype.className = 'Hello';
// User.prototype.getClassName = function() {
//     return this.className;
// }

// var author = new User ('Nhat', 'Thuy', 'Avatar');
// var user = new User ('Thuy', 'Teo', 'Avatar');

// console.log(author.className);
// console.log(user.getClassName);

// Đối tượng date

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth();
// var day = date.getDate();

// console.log(date)                                        (Ví dụ về date)

// Câu lệnh If else

// var date = 8;

// if (date === 2) {
//     console.log('Hôm nay là đầu tuần (thứ 2)')
// } else if (date === 8) {
//     console.log('Hôm nay là cuối tuần (chủ nhật)')
// } else if (date === 5) {
//     console.log('Hôm nay là thứ 5')
// } else {
//     console.log('Không biết!')
// }                                                        (Ví dụ)

// Câu lệnh - switch

// var date = 5;

// switch(date) {
//     case 2:
//         console.log('Số 2')
//         break;
//     case 3:
//         console.log('Số 3')    
//         break;
//     case 4:
//         console.log('Số 4')    
//         break;
//     case 5:
//         console.log('Số 5')
//         break;
//     case 6:
//         console.log('Số 6')
//         break;
//     default:
//         console.log('Không có gì')
// }                                                    (Nếu trong trường hợp so sánh thì sử dụng (if else) và trong trường hợp đã biết giá trị thì nên sử dụng (switch - sử dụng trong trường hợp trên 3 case, nếu dưới 3 case thì sử dụng if else))

// var course = {
//     name: 'Hello word',
//     coin: 200
// }

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Free');
// }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
// console.log(result)

// For Loop

// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// var myArray = [
//     'JS',
//     'PHP',
//     'Ruby',
//     'Python',
// ];

// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i])
// }                                                (Vòng lặp for để hiện giá trị thì cần điền (myArray[i]))

// For/in loop

// var languages = [
//     'JS',
//     'PHP',
//     'RUBY',
//     'PYTHON'
// ]

// for (var key in languages) {
//     console.log(languages[key])
// }

// var languages = 'Javascript'

// for (var key in languages) {
//     console.log(languages[key])
// }

// Vòng lặp for of

// var myInfor = {
//     name: 'THUY',
//     age: 21
// }

// for (var value of Object.values(myInfor)) {
//     console.log(value)
// }

// Vòng lặp while

// var languages = [
//     'JS',
//     'PHP',
//     'RB',
//     'PT',
//     'OT'
// ]

// var i = 0;

// while (i < languages.length) {
//     console.log(languages[i]);
//     i++;
// }

// Vòng lặp do/While

// var i = 0;
// var isSuccess = false

// do {
//     i++;

//     console.log('Nạp thẻ lần ' + i);
    
//     if (true) {
//         isSuccess = true;
//     }

// } while (!isSuccess && i <= 3);

// Break và continue trong vòng lặp (có thể sử dụng tất cả vòng lặp)

// for (var i = 0; i < 10; i++) {
//     if (i%2 !== 0) {
//         continue;
//     }

//     console.log(i);

//     if (i >= 5) {
//         break;
//     }
// }

// Vòng lặp nested loop
// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//     [9, 10]
// ]

// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i] [j]);
//     }
// }

// for (var i = 100; i > 0; i--) {
//     console.log(i)
// }

// for (var i = 0; i <= 100; i += 5) {
//     console.log(i)
// }

/** Làm việc cùng với mảng Array
 * 1. forEach()
 * 2. every()
 * 3. some()
 * 4. find()
 * 5. filter()
 * 6. map()
 * 7. reduce()
 * */

// var courses = [
//     {
//         id: 1,
//         name: 'JS',
//         coin: 100,
//         cointext: 'Giá'
//     },

//     {
//         id: 2,
//         name: 'Java',
//         coin: 200
//     },

//     {
//         id: 3,
//         name: 'ruby',
//         coin: 300
//     },

//     {
//         id: 4,
//         name: 'PT',
//         coin: 0
//     },

//     {
//         id: 5,
//         name: 'OT',
//         coin: 0
//     },
//     {
//         id: 6,
//         name: 'ruby',
//         coin: 300
//     }
// ];

// courses.forEach(function(index, course) {
//     console.log(index, course);
// });

// var isFree = courses.every and some(function(course, index) {
//     return course.coin === 0;
// });

// var course = courses.find(function(course, index) {
//     return course.name === 'ruby';
// });

// var Listcourses = courses.filter(function(course, index) {
//     return course.name === 'ruby';
// });

// function coursesHandler(course, index) {
//     return {
//         id: course.id,
//         name: `Khóa học: ${course.name}`,
//         conin: course.coin,
//         cointext: `Giá: ${course.coin}`
//     }
// }

// function coursesHandler(course, index) {
//     return course.name
// }

// function coursesHandler(course, index) {
//     return `<h2>${course.name}</h2>`
// }

// var newCourses = courses.map(coursesHandler);

// console.log(newCourses.join(''));

// function coinHandler (accumulator, currentValue, currentIndex, originArray) {                            (Ví dụ chi tiết về reduce)
//     return accumulator + currentValue.coin
// }

// var totalCoin = courses.reduce(coinHandler, 0)

// console.log(totalCoin);

// var totalCoin = courses.reduce(function(total, course) {                                     (Thực tế khi dùng reduce)
//     return total + course.coin
// }, 0);

// console.log(totalCoin)

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, [])

// console.log(flatArray)

// var topics = [
//     {
//         topic: "Font-end",
//         courses: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS'
//             },
//             {
//                 id: 2,
//                 title: 'JS'
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 3,
//                 title: 'Ruby'
//             },
//             {
//                 id: 4,
//                 title: 'Python'
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses)
// }, []);

// console.log(newCourses);

/**
 * Math Object
 * - Math.PI                                (Hiện ra chi tiết số pi)
 * -Math.round()                            (Làm tròn số (Dưới 0.49 thì làm tròn dưới và trên 0.5 thì làm tròn trên))
 * -Math.abs()                              (Giá trị tuyệt đối)
 * -Math.ceil()                             (Làm tròn số thập phân (1.1 thì sẽ làm tròn lên 2))
 * -Math.floor()                            (Làm tròn số tập phân (1.9 thì sẽ làm tròn 1))
 * -Math.random()                            (Radom các con số)
 * -Math.min()
 * -Math.max()
 */

// var random = Math.floor(Math.random() * 5);

// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ];

// console.log(bonus[random]);

//Callback (Là hàm, truyền qua đối số, được nhận lại (trong hàm nhận đối số))

// function myFunction(param) {
//     if (typeof param === 'function') {
//         param('Hoc lap trinh');
//     }
// };

// function myCallback(value) {
//     console.log('value:', value);
// ;}

// myFunction(myCallback);

// Callback - 2

var courses = [
    'JS',
    'PT',
    'RB'
];

// course.map(function(course) {
//     console.log(course)              (Callback)
// })

// var htmls = courses.map(function(course) {                       (vd1)
//     return `<h2>${courses}</h2>`
// })

// console.log(htmls.join(''))

// Array.prototype.map2 = function(callback) {                                  (vd2)
//     var arrayLength = this.length;

//     for (var i = 0; i < arrayLength; i++) {
//         callback(this[i], i)
//     }
// };

// courses.map2(function(courses, index) {
//     console.log(index, courses)
// })

// Array.prototype.map2 = function(callback) {                          (vd3)
//     var output = [], arrayLength = this.length;

//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i], i)
//         output.push(result)
//     }

//     return output;
// };

// var htmls =courses.map2(function(courses) {
//     return `<h2>${courses}</h2>`
// })

// console.log(htmls.join(''))

// Ví dụ

// var courses = [
//     'JS',
//     'PHP',
//     'PT'
// ]

// for ( var i = 0; i < courses.length; ++i) {
//     console.log(courses(i))
// }

// var courses = new Array(10)

// courses.push('GG', 'OG')

// console.log(courses)

// for (var index in courses) {
//     console.log(courses[index])
// }

// var courses = [
//     'SS',
//     'DA',
//     'PA'
// ];

// courses.forEach(function(course, index, array) {
//     console.log(course, index, array)
// })

// var array = ['a', 'b', 'c', 'a', 'b', 'c']

// console.log([...(new Set(array))])                   (Lọc ra ra khỏi những phần tử giổng nhau)

// var h1Elements = document.querySelectorAll('h1');

// for(var i = 0; i < h1Elements.length; ++i) {
//     h1Elements[i].onclick = function(e) {
//         console.log(e.target)
//     }
// }

// var inputElement = document.querySelector('input[type="text"')

// inputElement.onkeyup = function(e) {
//     console.log(e.which)

//     switch(e.which) {
//         case 27:
//             console.log('EXIT')
//             break;
//     }
// }

// document.onkeydown = function(e) {
//     switch(e.which) {
//         case 27:
//             console.log('EXIT')
//             break;
//         case 37:
//             console.log('Left')
//             break;
//         case 39:
//             console.log('Right')
//             break;
//     }
// }

// var btn = document.getElementById('btn')

// function viec1() {
//     console.log('viec1');
// }

// btn.addEventListener('click', viec1)

// setTimeout(function () {
//     btn.removeEventListener('click', viec1)
// }, 3000);


// Thư viện code java cách 1
// function validator(options) {

//   function getParent(element, selector) {
//     while (element.parentElement) {
//       if (element.parentElement.matches(selector)) {
//         return element.parentElement;
//       }
      
//       element = element.parentElement;
//     }
//   }

//     function validate(inputElement, rule) {
//       var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
//       var errorMessage = rule.test(inputElement.value);
//       if (errorMessage) {
//         errorElement.innerText = errorMessage;
//         getParent(inputElement, options.formGroupSelector).classList.add('invalid');
//       } else {
//         errorElement.innerText = '';
//         getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
//       }
//       return !errorMessage;
//     }
  
//     const formElement = document.querySelector(options.form);
//     if (formElement) {
//       formElement.onsubmit = function(e) {
//         e.preventDefault();
//         let isFormValid = true;
//         options.rules.forEach(function(rule) {
//           const inputElement = formElement.querySelector(rule.selector);
//           if (inputElement) {
//             const errorMessage = rule.test(inputElement.value);
//             if (errorMessage) {
//               const errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message');
//               errorElement.innerText = errorMessage;
//               getParent(inputElement, options.formGroupSelector).classList.add('invalid');
//               isFormValid = false;
//             }
//           }
//         });
  
//         if (isFormValid) {
//           if (typeof options.onSubmit === 'function') {
//             var enableInputs = formElement.querySelectorAll('[name]')
//             var formValues = Array.from(enableInputs).reduce(function(values, input) {
//                 values[input.name] = input.value;
//                 return values;
//             }, {});
            
//             options.onSubmit(formValues);
//           } 
          
//           else {
//             formElement.submit();
//           }
//         }
//       };

//       options.rules.forEach(function(rule) {
//         const inputElement = formElement.querySelector(rule.selector);
//         if (inputElement) {
//           inputElement.onblur = function() {
//             validate(inputElement, rule);
//           };
//           inputElement.oninput = function() {
//             const errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message');
//             errorElement.innerText = '';
//             getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
//           };
//         }
//       });
//     }
//   }
  
//   validator.isRequired = function(selector, message) {
//     return {
//       selector: selector,
//       test: function(value) {
//         return value.trim() ? undefined : message || 'Vui lòng nhập trường này!';
//       }
//     };
//   };
  
//   validator.isEmail = function(selector, message) {
//     return {
//       selector: selector,
//       test: function(value) {
//         const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         return value.trim() ? (regex.test(value) ? undefined : message || 'Vui lòng nhập địa chỉ Email!') : message || 'Vui lòng nhập địa chỉ Email!';
//       }
//     };
//   };
  
//   validator.minLength = function(selector, min, message) {
//     return {
//       selector: selector,
//       test: function(value) {
//         return value.trim() ? (value.length >= min ? undefined : message || `Độ dài mật khẩu tối thiểu là ${min} ký tự!`) : message || `Độ dài mật khẩu tối thiểu là ${min} ký tự!`;
//       }
//     };
//   };
  
//   validator.isConfirmed = function(selector, getConfirmValue, message) {
//     return {
//       selector: selector,
//       test: function(value) {
//         const confirmValue = getConfirmValue();
//         return value.trim() && confirmValue.trim() ? (value === confirmValue ? undefined : message || 'Mật khẩu xác nhận không khớp!') : message || 'Mật khẩu xác nhận không khớp!';
//       }
//     };
//   };


// Code JS cách 2

function validator (formSelector) {

  function getParent(element, selector) {
    while(element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement
      }
      element = element.parentElement;
    }
  }

  var formRules = {};

  var validatorRules = {
    required: function (value) {
      return value ? undefined: 'Vui lòng nhập trường này!';
    },

    email: function (value) {
      var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regax.test(value) ? undefined: 'Vui lòng nhập email!';
    },

    min: function (min) {
      return function (value) {
        return value.length >= min ? undefined: `Nhập mật khẩu cần ít nhất ${min} ký tự!`;
      }  
    }
  };

  var formElement = document.querySelector(formSelector);

  if (formElement) {
    
    var inputs = formElement.querySelectorAll('[name][rules]');
    for (var input of inputs) {

      var rules = input.getAttribute('rules').split('|');
      for (var rule of rules) {

        var ruleInfo;
        var isRuleHasvalue = rule.includes(':');

        if (isRuleHasvalue) {
          ruleInfo = rule.split(':');

          rule = ruleInfo[0];

          // console.log(validatorRules[rule](ruleInfo[0]))
        }

        var ruleFunc = validatorRules[rule];

        if (isRuleHasvalue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }

        // console.log(rule)

        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }

        input.onblur = handleValidate;
        input.oninput = handleClear;

      }

      function handleValidate (event) {
        var rules = formRules[event.target.name];
        var errorMessage;

        rules.find(function (rule) {
          errorMessage = rule(event.target.value)
          return errorMessage;

        });

        if (errorMessage) {
          var formGroup = getParent(event.target, '.form-group');
          if (formGroup) {
            formGroup.classList.add('invalid');
            var formMessage = formGroup.querySelector('.form-message');
            if (formMessage) {
              formMessage.innerText = errorMessage;
            }
          }
        }

        return !errorMessage;
      }
      
      function handleClear (event) {
        var formGroup = getParent(event.target, '.form-group');
        if (formGroup.classList.contains('invalid')) {
          formGroup.classList.remove('invalid');
          var formMessage = formGroup.querySelector('.form-message');
          if (formMessage) {
            formMessage.innerText = '';
          }
        }
      }
    }
  }
  
  formElement.onsubmit = function (event) {
    event.preventDefault();

    var inputs = formElement.querySelectorAll('[name][rules]');
    var isValid = true;

    for (var input of inputs) {
      if (!handleValidate({ target: input })){
        isValid = false
      }
    }

    is (isValid) {
      formElement.submit();
    }
  }
}