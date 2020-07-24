// soal - 1
function halo() {
    return "Halo Sanbers!"
}
console.log(halo()) // "Halo Sanbers!" 


// soal - 2
function kalikan(num1, num2) {
    return num1 * num2
}
var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48


// soal - 3
function introduce(name, age, address, hobby) {
    var kalimat = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby;
    return kalimat;
}
var name = "Helmi"
var age = "20"
var address = "Nganjuk"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Helmi, umur saya 20 tahun, alamat saya di Nganjuk, dan saya punya hobby yaitu Gaming!"