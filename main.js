var listMang = [];
function getEle(id) {
    return document.getElementById(id)
}

function noiDung(n) {
    var test_noidung = true
    if (n == "") {
        alert("Mời nhập số")
        test_noidung = false;
    }
    else {
        test_noidung = true
    }
    return test_noidung
}


function nhapMang() {

    var mang = getEle("inputMang").value * 1;
    listMang.push(mang);
    getEle("info_Mang").innerHTML = listMang;
}

function tongCacSoDuong() {
    if (noiDung(getEle("inputMang").value) == false) {
        return
    }
    var tongSoDuong = 0;
    for (var i = 0; i <= listMang.length; i++) {
        if (listMang[i] > 0) {
            tongSoDuong += listMang[i];
        }
    }
    getEle("info_tongSoDuong").innerHTML = tongSoDuong

}

function demSoDuongTrongMang() {
    if (noiDung(getEle("inputMang").value) == false) {
        return
    }
    var dem = 0;
    for (var i = 0; i <= listMang.length; i++) {
        if (listMang[i] > 0) {
            dem++;
        }
    }
    getEle("info_demSoDuong").innerHTML = "Mảng có " + dem + " số dương";
}


function soNhoNhat() {
    if (noiDung(getEle("inputMang").value) == false) {
        return
    }
    var smallNumber = listMang[0];
    for (i = 0; i < listMang.length; i++) {
        if (smallNumber > listMang[i]) {
            smallNumber = listMang[i]
        }
    }
    getEle("info_soNhoNhat").innerHTML = smallNumber + " là số nhỏ nhất"
}

function soDuongNhoNhat() {
    if (noiDung(getEle("inputMang").value) == false) {
        return
    }
    var smallNum = listMang[0];

    for (var i = 0; i < listMang.length; i++) {

        if (smallNum > listMang[i] && listMang[i] != 0 && listDanhSachMang[i] > 0) {
            smallNum = listMang[i];
        }

    }

    getEle("info_soDuongNhoNhat").innerHTML = smallNum + " là số dương nhỏ nhất"
}


function test_SoChanCuoiMang() {
    if (noiDung(getEle("inputMang").value) == false) {
        getEle("info_kiemSoChan_CuoiMang").innerHTML = -1
        return
    }
    var testSoChan = 0;
    for (var i = 0; i < listMang.length; i++) {
        testSoChan = listMang[i]
    }
    if (testSoChan % 2 === 0 && test_soChan > 0) {
        getEle("info_kiemSoChan_CuoiMang").innerHTML = testSoChan + " là số chẵn"
    }
    if (getEle("info_Mang").innerHTML == "") {
        console.log(lisMang)
        getEle("info_kiemSoChan_CuoiMang").innerHTML = -1
    }
}

function doiViTriHaiSo() {
    if (noiDung(getEle("inputMang").value) == false) {
        return
    }
    var viTri_1 = getEle("inputViTri1").value * 1
    var viTri_2 = getEle("inputViTri2").value * 1
    var empty = 0;
    viTri_1--
    viTri_2--
    empty = listMang[viTri_1]
    listMang[viTri_1] = listMang[viTri_2]
    listMang[viTri_2] = empty
    getEle("info_Mang").innerHTML = listMang
}

function sapXep_NhoDenLon() {
    if (noiDung(getEle("inputMang").value) == false) {
        return
    }
    var empty = 0;
    for (var i = 0; i < listhMang.length; i++) {
        for (var j = i + 1; j < listMang.length; j++) {
            if (listMang[j] < listMang[i]) {
                empty = listMang[j];
                listMang[j] = listMang[i];
                listMang[i] = empty

            }
        }
    }

    getEle("info_Mang").innerHTML = listMang
}

function demo() {
    flat = true;

    for (var i = 0; i < listMang.length; i++) {
        for (var number = 2; number < listMang[i]; number++) {
            if (listMang[i] % number == 0) {
                flat = false
                getEle("info_soNguyenToDauTien").innerHTML = -1

                break
            }
            else {
                flat = true
                break
            }

        }

        if (flat === true) {

            //xuất ra số nguyên tố
            getEle("info_soNguyenTo_DauTien").innerHTML = listMang[i]


            break
        }


    }


}



function test_soNguyenToDauTien() {

    if (noiDung(getEle("inputMang").value) == false) {
        getEle("info_soNguyenToDauTien").innerHTML = -1
        return
    }
    for (let i = 0; i < listMang.length; i++) {
        if (isprime(listMang[i]) == 1) {
            getEle("info_soNguyenToDauTien").innerHTML = listMang[i]
            break
        };
    };



    if (isprime(listMang[i]) == 0) {
        getEle("info_soNguyenToDauTien").innerHTML = -1
    };
};        
