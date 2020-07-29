//soal - 1
let luasLingkaran = (r) => {
    const phi = 3.14;
    return phi * r * r;
};
console.log(luasLingkaran(5));

let kelilingLingkaran = (r) => {
    const phi = 3.14
    return 2 * phi * r;
}
console.log(kelilingLingkaran(6))

//soal - 2
const kata1 = 'saya'
const kata2 = 'adalah'
const kata3 = 'seorang'
const kata4 = 'frontend'
const kata5 = 'developer'

const theString = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
let kalimat = " "
let tambahKata = {
    kalimat: theString,
    get kata() {
        return `${this.kalimat} `;
    }
}
console.log(tambahKata.kata);


//soal - 3
class Book {
    constructor(name, totalPage, price) {
        this.name = name;
        this.totalPage = totalPage;
        this.price = price
    }
    printInfo() {
        console.log('Judul : ' + this.name + ', Isi halaman : ' + this.totalPage + ', Harga : ' + this.price);
    }
}
class Komik extends Book {
    constructor(name, totalPage, price, isColorful) {
        super(name, totalPage, price);
        this._isColorful = isColorful;
    }
    printInfo() {
        if (this._isColorful == true) {
            console.log('Judul : ' + this.name + ', Isi halaman : ' + this.totalPage + ', Harga : ' + this.price + ', Colorful = true');
        } else {
            console.log('Judul : ' + this.name + ', Isi halaman : ' + this.totalPage + ', Harga : ' + this.price + ', Colorful = false');
        }
    }
}
var print = new Komik('Date a Live', 100, 100000, true);
print.printInfo();