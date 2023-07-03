

//Bai 1
document.querySelector('#tinhKetQua').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value;
    var khuVuc = document.getElementById('khuVuc').value;
    console.log("Khu Vuc: " + khuVuc)
    var doiTuong = document.getElementById('doiTuong').value;

    var diem1 = +document.getElementById('diem1').value;
    var diem2 = +document.getElementById('diem2').value;
    var diem3 = +document.getElementById('diem3').value;

    var congKV;
    var congDT;

    switch (khuVuc) {
        case "A": 
            congKV = 2;
            break;
        case "B": 
            congKV = 1;
            break;
        case "C": 
            congKV = 0.5;
            break;
        default:
            congKV = 0;
            break;
    }

    switch (doiTuong) {
        case 1: 
            congDT = 2.5;
            break;
        case 2: 
            congKV = 1.5
            break;
        case 3: 
            congKV = 1;
            break;
        default:
            congDT = 0;
            break;
    }


    if (diem1 > 10 || diem1 < 0 || diem2 > 10 || diem2 < 0 || diem3 > 10 || diem3 < 0) {
        
        alert("Điểm phải trong khoảng từ 0 tới 10");
        
    } else {
        var tongDiem = diem1 + diem2 + diem3 + congKV + congDT;

        var ketQua = "Đậu";
        if (tongDiem < diemChuan) ketQua = "Rớt";

        document.getElementById("ketQuaTuyenSinh").innerHTML = 'Tổng điểm là: ' + tongDiem + " - " + ketQua;
    }

}

// document.querySelector('#calc').onclick = function () {
//     var so = +document.getElementById('so').value;  
//     if(9 < so  && so < 99 && Number.isInteger(so)) {
//         var so_hang_dv = so%10;
//         var so_hang_chuc = (so - so_hang_dv)/10;
//         var tong = + (so_hang_dv + so_hang_chuc)
//         document.getElementById("tong").innerHTML = 'Tổng của 2 số: ' + tong
//     } else alert("Nhap Sai");
// }

// // //Bai 2
// document.querySelector('#avg').onclick = function () {
//     var num1 = +document.getElementById('num1').value;
//     var num2 = +document.getElementById('num2').value;
//     var num3 = +document.getElementById('num3').value;
//     var num4 = +document.getElementById('num4').value;
//     var num5 = +document.getElementById('num5').value;
//     var avg = (num1 + num2 + num3 + num4 + num5) / 5;
//     document.getElementById("avgValue").innerHTML = 'Avg: ' + avg
// }

// //Bai 3
// document.querySelector('#chuyenDoi').onclick = function () {
//     var rate = 23500;
//     var usd = document.getElementById('usd').value;
//     var vnd = rate * usd;
//     document.getElementById("vnd").innerHTML = 'VND: ' + vnd
// }

// // //Bai 4
// document.querySelector('#gen').onclick = function () {
//     var width = +document.getElementById('width').value;  
//     var height = +document.getElementById('height').value;
//     var cv = (width + height) * 2;
//     var dt = width * height;
//     document.getElementById("cv").innerHTML = 'Chu Vi: ' + cv
//     document.getElementById("dt").innerHTML = 'Diện Tích: ' + dt

// }

// //Bai 5
// document.querySelector('#calc').onclick = function () {
//     var so = +document.getElementById('so').value;  
//     if(9 < so  && so < 99 && Number.isInteger(so)) {
//         var so_hang_dv = so%10;
//         var so_hang_chuc = (so - so_hang_dv)/10;
//         var tong = + (so_hang_dv + so_hang_chuc)
//         document.getElementById("tong").innerHTML = 'Tổng của 2 số: ' + tong
//     } else alert("Nhap Sai");

// }