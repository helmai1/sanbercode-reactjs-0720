// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var upper = kataKeempat.toUpperCase();
var firstLetterUpper = kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1);
var kalimat = kataPertama + " " + firstLetterUpper + " " + kataKetiga + " " + upper;

console.log(kalimat);


// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var strInt_1 = parseInt(kataPertama);
var strInt_2 = parseInt(kataKedua);
var strInt_3 = parseInt(kataKetiga);
var strInt_4 = parseInt(kataKeempat);

var jumlah = strInt_1 + strInt_2 + strInt_3 + strInt_4;

console.log(jumlah);



// soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 19);
var kataKeempat = kalimat.substr(19, 6);
var kataKelima = kalimat.substr(25);


console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);


// soal 4
var nilai = 78;

if (nilai >= 80) {
    console.log("indeksnya A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("indeksnya B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("indeksnya C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("indeksnya D")
} else if (nilai < 50) {
    console.log("indeksnya E")
}


// soal 5
var tanggal = 30;
var bulan = 1;
var tahun = 1999;

switch (bulan) {
    case 1:
        console.log(tanggal + " Januari " + tahun);
        break;
    case 2:
        console.log(tanggal + " Februari " + tahun);
        break;
    case 3:
        console.log(tanggal + " Maret " + tahun);
        break;
    case 4:
        console.log(tanggal + " April " + tahun);
        break;
    case 5:
        console.log(tanggal + " Mei " + tahun);
        break;
    case 6:
        console.log(tanggal + " Juni " + tahun);
        break;
    case 7:
        console.log(tanggal + " Juli " + tahun);
        break;
    case 8:
        console.log(tanggal + " Agustus " + tahun);
        break;
    case 9:
        console.log(tanggal + " September " + tahun);
        break;
    case 10:
        console.log(tanggal + " Oktober " + tahun);
        break;
    case 11:
        console.log(tanggal + " November " + tahun);
        break;
    case 12:
        console.log(tanggal + " Desember " + tahun);
        break;
    default:
        console.log("Bulan tersebut tidak ditemukan! (Invalid!)")
        break;
}