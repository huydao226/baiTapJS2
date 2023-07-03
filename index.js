

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

// Tiền Điện
document.querySelector('#tinhTienDien').onclick = function () {
    var hoTen = document.getElementById('hoTen').value;
    var kw = +document.getElementById('kw').value;
    var a = 0
    var b = 0
    var c = 0
    var d = 0 
    var e = 0;

    console.log(a);
    if (kw >= 0 ) {
        if(kw <= 50) {
            a = kw;
        } else if(kw <= 100) {
            a = 50;
            b = kw - a;
        } else if(kw <= 200) {
            a = 50;
            b = 50;
            c = kw - a - b;
        } else if(kw <= 350) {
            a = 50;
            b = 50;
            c = 100;
            d = kw - a - b - c;
        } else {
            a = 50;
            b = 50;
            c = 100;
            d = kw - a - b - c; 
        }
        var tongTien = (500 * a) + (650 * b) + (850 * c) + (1100 * d) + (1300 * e) 
        console.log(tongTien)
        document.getElementById("tongTienDien").innerHTML = 'Anh/Chị ' + hoTen + " phải trả tổng số tiền là: " + tongTien;
    } else {
        alert("Kw phải là số dương");
    }
}

//Thuế
document.querySelector('#tinhThue').onclick = function () {
    var hoTen = document.getElementById('hoTen2').value;
    var tongThuNhap = +document.getElementById('thuNhap').value;
    var soNguoiPhuThuoc = +document.getElementById('phuThuoc').value;

    var thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoiPhuThuoc * 1600000);
    var thue;
    var max1 = (60000000 * 5/100);
    var max2 = max1 + (60000000 * 10/100);
    var max3 = max2 + (90000000 * 15/100);
    var max4 = max3 + (174000000 * 20/100);
    var max5 = max4 + (240000000 * 25/100);
    var max6 = max5 + (336000000 * 30/100);

    if (thuNhapChiuThue > 0) {
        if (thuNhapChiuThue <= 60000000) {
            thue = thuNhapChiuThue * 5/100 ;
        } else if (thuNhapChiuThue <= 120000000) {
            thue = max1 + (thuNhapChiuThue - 60000000) * 10/100 ;
        } else if (thuNhapChiuThue <= 210000000) {
            thue = max1 + (thuNhapChiuThue - 120000000) * 15/100 ;
        } else if (thuNhapChiuThue <= 384000000) {
            thue = max1 + (thuNhapChiuThue - 210000000) * 20/100 ;
        } else if (thuNhapChiuThue <= 624000000) {
            thue = max1 + (thuNhapChiuThue - 384000000) * 25/100 ;
        } else if (thuNhapChiuThue <= 960000000) {
            thue = max1 + (thuNhapChiuThue - 624000000) * 30/100 ;
        } else {
            thue = max6 + (thuNhapChiuThue - 960000000) * 35/100 ;
        }
        document.getElementById("thue").innerHTML = 'Anh/Chị ' + hoTen + " phải nộp tổng số thuế là: " + thue;
    } else {
        document.getElementById("thue").innerHTML = 'Anh/Chị ' + hoTen + " phải nộp tổng số thuế là: " + 0;
    }
}

// // //Bai 4
// document.querySelector('#gen').onclick = function () {
//     var width = +document.getElementById('width').value;  
//     var height = +document.getElementById('height').value;
//     var cv = (width + height) * 2;
//     var dt = width * height;
//     document.getElementById("cv").innerHTML = 'Chu Vi: ' + cv
//     document.getElementById("dt").innerHTML = 'Diện Tích: ' + dt

// }
