

// var numbers = [
//   [5, 12, 17, 9, 3],
//   [13, 4, 8, 14, 1],
//   [9, 6, 3, 7, 21]
// ];

// // Lặp theo hàng
// for (var i = 0; i < numbers.length; i++){
   
//   // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng i
//   for (var j = 0; j < numbers[i].length; j++){
//       console.log(numbers[i][j]);
//   }
// }

// var boolean_true = true;
// Number(boolean_true);

// let number1 = 10;
// let number2 = 15;
// let floatnumber = 12.6;

// document.write('x = ' + number1 + " " + 'y = ' + number2 + " " + 'z = ' + floatnumber);

// var dateObj = new Date();
// document.write(dateObj);

// Bài 1

// var name = prompt('Nhập tên của bạn dưới đây:');

// document.write('Xin chào: ' + name + '!');

// Bài 2

// var so1 = parseInt(prompt('Nhập bất kỳ số thứ nhất: '));
// var so2 = parseInt(prompt('Nhập bất kỳ số thứ hai: '));
// var so3 = parseInt(prompt('Nhập bất kỳ số thứ ba: '));

// var tangdan = [so1, so2, so3];

// tangdan.sort(function(a, b) {
//     return a - b;
// });

// document.write('Thứ tự tăng dần ' + tangdan.join() + '<br>');

// var giamdan = [so1, so2, so3];

// giamdan.sort(function(a, b) {
//     return b - a;
// });

// document.write('Thứ tự giảm dần ' + giamdan.join() + ',');

// Bài 3

// var x = 10;
// var y = 10.1;
// var z = 'a';

// document.write('x = ' + x + '<br>');
// document.write('y = ' + y + '<br>');
// document.write('z = ' + z + '<br>');

// Back

// var a = 10;
// var b = 2;

// var tong = (a + b);
// var hieu = (a - b);
// var tich = (a * b);
// var thuong = (a / b);

// document.write('Tổng của 10 & 2 là: ' + tong + '<br>');
// document.write('Hiệu của 10 & 2 là: ' + hieu + '<br>');
// document.write('Tích của 10 & 2 là: ' + tich + '<br>');
// document.write('Thương của 10 & 2 là: ' + thuong + '<br>');

// var so1 = parseInt(prompt('Nhập số nguyên thứ nhất: '));
// var so2 = parseInt(prompt('Nhập số nguyên thứ hai: '));

// var tong = (so1 + so2);
// var trungBinh = (so1 + so2) / 2;

// document.write('Tổng của 2 số là: ' + tong + '<br>');
// document.write('Trung bình của 2 số là: ' + trungBinh + '<br>');

// var so1 = parseInt(prompt('Nhập giá trị "vận tốc" bất kỳ: '));
// var so2 = parseInt(prompt('Nhập giá trị "gia tốc" bất kỳ: '));
// var so3 = parseInt(prompt('Nhập giá trị "thời gian" bất kỳ: '));

// var v = (so1 + so2 * so3);

// document.write('Vận tốc cuối cùng là: ' + v + '<br>');

// function getDDMMYYYY(dateString) {
//     var dateParts = dateString.split("/");
 
//     // Tháng bắt đầu từ 0 nên ta phải giảm đi 1: dataParts[1] - 1
//     return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
// }
// getDDMMYYYY('23/10/2015');

// function checkTime(i)
// {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// function startTime() 
// {
//     // Lấy Object ngày hiện tại
//     var today = new Date();
 
//     // Giờ, phút, giây hiện tại
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
 
//     // Chuyển đổi sang dạng 01, 02, 03
//     m = checkTime(m);
//     s = checkTime(s);
 
//     // Ghi ra trình duyệt
//     document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
 
//     // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
//     var t = setTimeout(function() {
//         startTime();
//     }, 500);
// }

// var x = 10;
// var y = 5;

// var expressions = [
//     {expression: "x = y + 3", result: y + 3},
//     {expression: "x = y - 2", result: y - 2},
//     {expression: "x = y * 5", result: y * 5},
//     {expression: "x = x / y", result: x / y},
//     {expression: "x = x * y", result: x * y}
// ];

// var output = document.getElementById("output");

// output.innerHTML += "Gtri x | Gtri y | Bieu Thuc | Ket qua<br>";
// expressions.forEach(function(item) {
//     output.innerHTML += x + " | " + y + " | " + item.expression + " | x = " + item.result + "<br>";
// });

// var x = 5;

// var expressions = [
//     { initial_value: x, expression: "x++", result: x++, final_value: x },
//     { initial_value: x, expression: "x--", result: x--, final_value: x },
//     { initial_value: x, expression: "++x", result: ++x, final_value: x },
//     { initial_value: x, expression: "--x", result: --x, final_value: x }
// ];

// var resultHTML = "<table><tr><th>Gtri ban dau | </th><th>Bieuthuc |</th><th>Gtri cua bieuthuc |</th><th>Gtri sau cua x</th></tr>";

// expressions.forEach(function(item) {
//     resultHTML += "<tr><td>" + item.initial_value + "</td><td>" + item.expression + "</td><td>" + item.result + "</td><td>" + item.final_value + "</td></tr>";
// });

// resultHTML += "</table>";

// document.getElementById("result").innerHTML = resultHTML;

// var kiemtra1 = parseFloat(prompt("Nhap diem kiem tra 1:"));
// var kiemtra2 = parseFloat(prompt('Nhap diem kiem tra 2: '));
// var kiemtra3 = parseFloat(prompt('Nhap diem kiem tra 3: '));
// var giuaky = parseFloat(prompt('Nhap diem kiem tra giua ky: '));
// var cuoiky = parseFloat(prompt('Nhap diem kiem tra cuoi ky: '));

// var tongdiemkiemtra = (kiemtra1 + kiemtra2 + kiemtra3);

// var tongdiem = (giuaky + cuoiky);

// document.write("=======Diem kiem tra=============== <br>");
// document.write('<br>')
// document.write("Nhap diem kiem tra 1:", kiemtra1, "<br>");
// document.write("Nhap diem kiem tra 2:", kiemtra2, "<br>");
// document.write("Nhap diem kiem tra 3:", kiemtra3, "<br>");
// document.write("=======Diem thi giua ky============== <br>");
// document.write("Nhap diem thi giua ky:", giuaky, "<br>");
// document.write("=======Diem thi cuoi ky============== <br>");
// document.write("Nhap diem thi cuoi ky:", cuoiky, "<br>");
// document.write("Tong diem kiem tra:", tongdiemkiemtra, "<br>");
// document.write("Diem thi giua ky:", giuaky, "<br>");
// document.write("Diem thi cuoi ky:", cuoiky, "<br>");
// document.write("Tong diem:", tongdiem);

// function tinhTongDiem() {
//     // Lấy giá trị điểm từ các input
//     var diem1 = parseFloat(document.getElementById("diem1").value);
//     var diem2 = parseFloat(document.getElementById("diem2").value);
//     var diem3 = parseFloat(document.getElementById("diem3").value);
//     var diemGiuaky = parseFloat(document.getElementById("diemGiuaky").value);
//     var diemCuoiKy = parseFloat(document.getElementById("diemCuoiKy").value);
  
//     // Tính tổng điểm kiểm tra
//     var tongDiemKiemTra = diem1 + diem2 + diem3;
  
//     // Tính tổng điểm
//     var tongDiem = tongDiemKiemTra + diemGiuaky + diemCuoiKy;
  
//     // Hiển thị kết quả
//     var ketQuaHTML = "<p><strong>Điểm kiểm tra:</strong> " + tongDiemKiemTra.toFixed(1) + "</p>";
//     ketQuaHTML += "<p><strong>Điểm thi giữa kỳ:</strong> " + diemGiuaky.toFixed(1) + "</p>";
//     ketQuaHTML += "<p><strong>Điểm thi cuối kỳ:</strong> " + diemCuoiKy.toFixed(1) + "</p>";
//     ketQuaHTML += "<p><strong>Tổng điểm:</strong> " + tongDiem.toFixed(1) + "</p>";
  
//     document.getElementById("ketQua").innerHTML = ketQuaHTML;
//   }

// var number = parseFloat("2e2");
// console.log(number);

// var x = parseInt(prompt("Nhập số nguyên x: "))
// var y = parseInt(prompt("Nhập số nguyên y: "))

// var p = (x * y);
// var s = (x + y);
// var q = Math.pow(s, 2) + p * (s - x) * (p + y);

// document.write(q);

// // Định nghĩa lớp ComplexNumber
// class ComplexNumber {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }

//     // Nạp chồng toán tử "+" để thực hiện phép cộng hai số phức
//     static add(complex1, complex2) {
//         let realPart = complex1.real + complex2.real;
//         let imaginaryPart = complex1.imaginary + complex2.imaginary;
//         return new ComplexNumber(realPart, imaginaryPart);
//     }
// }

// // Tạo hai số phức
// let complex1 = new ComplexNumber(2, 3);
// let complex2 = new ComplexNumber(1, 4);

// // Thực hiện phép cộng hai số phức
// let sum = ComplexNumber.add(complex1, complex2);

// // In kết quả
// console.log("Tổng hai số phức:", sum.real, "+", sum.imaginary, "i");


// // Định nghĩa lớp ComplexNumber
// class ComplexNumber {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }

//     // Nạp chồng toán tử một ngôi để tạo chuỗi biểu diễn số phức
//     toString() {
//         if (this.imaginary >= 0) {
//             return this.real + " + " + this.imaginary + "i";
//         } else {
//             return this.real + " - " + Math.abs(this.imaginary) + "i";
//         }
//     }
// }

// // Tạo một số phức
// let complex = new ComplexNumber(2, -3);

// // In số phức ra console
// console.log("Số phức:", complex);


// // Nhập tuổi của học sinh từ người dùng
// var age = parseInt(prompt("Nhập tuổi của học sinh:"));

// // Kiểm tra điều kiện để học lớp 10
// if (age >= 15 && age <= 18) {
//     console.log("Học sinh đủ điều kiện để học lớp 10.");
// } else {
//     console.log("Học sinh không đủ điều kiện để học lớp 10.");
// }

// var number = prompt("Nhập 1 số nguyên");

// if (number > 100) {
//     console.log(number + 'là số lớn hơn 100');
// } else {
//     console.log(number + 'là số bé hơn 100');
// }

// // Nhắc người dùng nhập 3 số nguyên
// var number1 = parseInt(prompt("Nhập số nguyên thứ nhất:"));
// var number2 = parseInt(prompt("Nhập số nguyên thứ hai:"));
// var number3 = parseInt(prompt("Nhập số nguyên thứ ba:"));

// // Tìm giá trị lớn nhất
// var maxNumber = number1; // Giả sử số đầu tiên là số lớn nhất ban đầu

// // So sánh số thứ hai và cập nhật maxNumber nếu cần
// if (number2 > maxNumber) {
//     maxNumber = number2;
// }

// // So sánh số thứ ba và cập nhật maxNumber nếu cần
// if (number3 > maxNumber) {
//     maxNumber = number3;
// }

// // In ra số lớn nhất
// console.log("Số lớn nhất là:", maxNumber);

// // Nhập điểm từ người dùng
// var diemBaiKT = parseFloat(prompt("Nhập điểm bài kiểm tra:"));
// var diemGiuaKy = parseFloat(prompt("Nhập điểm thi giữa kỳ:"));
// var diemCuoiKy = parseFloat(prompt("Nhập điểm thi cuối kỳ:"));

// // Tính điểm trung bình
// var diemTrungBinh = (diemBaiKT + diemGiuaKy + diemCuoiKy) / 3;

// // Xác định hạng học lực dựa trên điểm trung bình
// var hangHocLuc;
// if (diemTrungBinh >= 9.0) {
//     hangHocLuc = "A";
// } else if (diemTrungBinh >= 7.0 && diemTrungBinh < 9.0) {
//     hangHocLuc = "B";
// } else if (diemTrungBinh >= 5.0 && diemTrungBinh < 7.0) {
//     hangHocLuc = "C";
// } else {
//     hangHocLuc = "F";
// }

// // In kết quả hạng học lực ra console
// console.log("Hạng học lực của học sinh là:", hangHocLuc);

// // Nhập các hệ số a, b, c từ người dùng
// var a = parseFloat(prompt("Nhập hệ số a:"));
// var b = parseFloat(prompt("Nhập hệ số b:"));
// var c = parseFloat(prompt("Nhập hệ số c:"));

// // Tìm nghiệm của phương trình bậc hai
// var delta = b * b - 4 * a * c;

// if (a === 0) {
//     // Nếu a = 0, phương trình trở thành phương trình bậc một bx + c = 0
//     if (b === 0) {
//         if (c === 0) {
//             console.log("Phương trình có vô số nghiệm.");
//         } else {
//             console.log("Phương trình vô nghiệm.");
//         }
//     } else {
//         var x = -c / b;
//         console.log("Phương trình có một nghiệm:", x);
//     }
// } else {
//     if (delta < 0) {
//         console.log("Phương trình vô nghiệm.");
//     } else if (delta === 0) {
//         var x = -b / (2 * a);
//         console.log("Phương trình có một nghiệm kép:", x);
//     } else {
//         var x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         var x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         console.log("Phương trình có hai nghiệm phân biệt:");
//         console.log("Nghiệm thứ nhất:", x1);
//         console.log("Nghiệm thứ hai:", x2);
//     }
// }

// var doanhthu = parseFloat(prompt('Nhập số doanh thu hàng tháng: '));

// var hoahong;

// if (doanhthu <= 100) {
//     hoahong = doanhthu * 0.05;
// } else if (doanhthu <= 200) {
//     hoahong = doanhthu * 0.10;
// } else {
//     hoahong = doanhthu * 0.20;
// }

// console.log("Số tiền hoa hồng bạn nhận được là:", hoahong, "triệu đồng.");

// // Nhập số phút đã gọi từ người dùng
// var soPhutGoi = parseInt(prompt("Nhập số phút đã gọi điện thoại:"));

// // Phí thuê bao bắt buộc
// var phiThueBao = 25000;

// // Cước gọi cho 50 phút đầu tiên
// var cuocGoi50PhutDau = 600;

// // Cước gọi cho 150 phút tiếp theo
// var cuocGoi150PhutTiepTheo = 400;

// // Cước gọi cho mỗi phút sau 200 phút đầu tiên
// var cuocGoiSau200PhutDauTien = 200;

// // Tính cước điện thoại
// var cuocDienThoai = phiThueBao;

// if (soPhutGoi <= 50) {
//     cuocDienThoai += cuocGoi50PhutDau * soPhutGoi;
// } else if (soPhutGoi <= 200) {
//     cuocDienThoai += cuocGoi50PhutDau * 50 + cuocGoi150PhutTiepTheo * (soPhutGoi - 50);
// } else {
//     cuocDienThoai += cuocGoi50PhutDau * 50 + cuocGoi150PhutTiepTheo * 150 + cuocGoiSau200PhutDauTien * (soPhutGoi - 200);
// }

// // In kết quả cước điện thoại ra console
// console.log("Cước điện thoại bàn là:", cuocDienThoai, "đồng.");

// // Nhập lương nhân viên từ người dùng
// var luongNhanVien = parseFloat(prompt("Nhập lương của nhân viên (trong triệu đồng):"));

// // Khai báo biến để lưu số tiền thuế
// var thueThuNhap;

// // Tính thuế thu nhập dựa trên mức lương
// if (luongNhanVien >= 15) {
//     thueThuNhap = luongNhanVien * 0.3; // 30% thuế thu nhập
// } else if (luongNhanVien >= 7) {
//     thueThuNhap = luongNhanVien * 0.2; // 20% thuế thu nhập
// } else {
//     thueThuNhap = luongNhanVien * 0.1; // 10% thuế thu nhập
// }

// // Tính lương ròng
// var luongRong = luongNhanVien - thueThuNhap;

// // In kết quả lương ròng ra console
// console.log("Lương ròng của nhân viên là:", luongRong, "triệu đồng.");
