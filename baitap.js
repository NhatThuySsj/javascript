

// Test 1

// var a = parseInt(prompt("Nhập số nguyên thứ nhất: "));
// var b = parseInt(prompt("Nhập số nguyên thứ hai: "));

// function soSanh (a, b) {
//     if (a === b) {
//         return "Hai số nguyên bằng nhau";
//     } else if (a < b) {
//         return "Số nguyên thứ 2 lớn hơn số nguyên thứ nhất";
//     } if (a > b) {
//         return "Số nguyên thứ nhất lớn hơn số nguyên thứ 2";
//     }
// }

// document.write(soSanh(a, b))

// Test 2

// var a = parseInt(prompt("Nhập số nguyên thứ nhất: "));
// var b = parseInt(prompt("Nhập số nguyên thứ hai: "));
// var c = parseInt(prompt("Nhập số nguyên thứ ba: "));

// var maxNumber = a;

// if (a < b) {
//     maxNumber = b;
// }

// if (a < c) {
//     maxNumber = c;
// }

// document.write(maxNumber)

// Test 3

// var a = parseInt(prompt("Nhập số bất kỳ nhất: "));
// var b = parseInt(prompt("Nhập số bất kỳ hai: "));
// var c = parseInt(prompt("Nhập số bất kỳ ba: "));
// var d = parseInt(prompt("Nhập số bất kỳ tư: "));

// var number = [a, b, c, d];

// for (var i in number) {
//     if (i % 2 === 0) {
//         document.write(i + " là số chẵn<br>");
//     } else {
//         document.write(i + " là số lẻ<br>");
//     }
// }

// document.write("Dãy số bạn vừa nhập là: " + number);

// Test 4

// var a = parseInt(prompt("Nhập số bất kỳ nhất: "));
// var b = parseInt(prompt("Nhập số bất kỳ hai: "));

// var number = [a, b];

// for (var i = 0; i < number.length; i++) {
//     if (number[i] > 0) {
//         document.write(number[i] + " Số dương<br>")
//     } else if (number[i] < 0) {
//         document.write(number[i] + " Là số âm<br>")
//     } else {
//         document.write(" 0 là số không âm<br>")
//     }
// }

// document.write("Số bạn vừa nhập là: " + number);

// Test 5

// var a = parseInt(prompt("Nhập số bất kỳ nhất: "));
// var b = parseInt(prompt("Nhập số bất kỳ hai: "));

// var number = [a, b];

// for (var i in number) {
//     if (number[i] % 4 === 0) {
//         document.write("Là năm nhuận<br>");
//     } else {
//         document.write("Không phải là năm nhuận<br>");
//     }
// }

// document.write("Gía trị bạn vừa nhập là: " + number);

// Test 6

// var a = 5;
// var b = 10;

// document.write("Trước khi đổi giá trị<br>")
// document.write("a= " + a + "<br>" + "b= " + b + "<br>");

// var number = a;
// a = b;
// b = number;

// document.write("Sau khi đổi giá trị<br>")
// document.write("a= " + a + "<br>" + "b= " + b)

// Test 7

// var a = 5;
// var b = 10;

// document.write("Trước khi tráo đổi: <br>");
// document.write("a =", a + "<br>");
// document.write("b =", b + "<br>");

// a = a + b;
// b = a - b;
// a = a - b;

// document.write("Sau khi tráo đổi: <br>");
// document.write("a =", a + "<br>");
// document.write("b =", b + "<br>");

// Test 8

// var a = parseFloat(prompt("Nhập hệ số a:"));
// var b = parseFloat(prompt("Nhập hệ số b:"));
// var c = parseFloat(prompt("Nhập hệ số c:"));

// var delta = b * b - 4 * a * c;

// if (a === 0) {
//     if (b === 0) {
//         if (c === 0) {
//             document.write("Phương trình có vô số nghiệm. <br>");
//         } else {
//             document.write("Phương trình vô nghiệm. <br>");
//         }
//     } else {
//         var x = -c / b;
//         document.write("Phương trình có một nghiệm:", x + "<br>");
//     }
// } else {
//     if (delta < 0) {
//         document.write("Phương trình vô nghiệm. <br>");
//     } else if (delta === 0) {
//         var x = -b / (2 * a);
//         document.write("Phương trình có một nghiệm kép:", x + "<br>");
//     } else {
//         var x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         var x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         document.write("Phương trình có hai nghiệm phân biệt: <br>");
//         document.write("Nghiệm thứ nhất:", x1.toFixed(1) + "<br>");
//         document.write("Nghiệm thứ hai:", x2.toFixed(1));
//     }
// }