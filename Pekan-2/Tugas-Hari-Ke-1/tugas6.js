// soal - 1
var arrayDaftarPeserta = {
    nama: "Helmi",
    "jenis kelamin": "laki-laki",
    hobi: "baca buku",
    "tahun lahir": 1999,
}
console.log(arrayDaftarPeserta)


// soal - 2
var buah = [{
    nama: "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000
}, {
    nama: "jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000
}, {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000
}, {
    nama: "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000
}]
console.log("")
console.log(buah[0]) //muncul data pertama yaitu data dari buah strawberry


// soal - 3
var objectFilm = [{
    nama: "Kimi no Na Wa",
    durasi: "2 jam",
    genre: "fantasy",
    tahun: 2016
}, {
    nama: "Tenki no Ko",
    durasi: "2 jam",
    genre: "fantasi, drama",
    tahun: 2019
}]
var dataFilm = []

function tambahData() {
    dataFilm.push(objectFilm)
}
tambahData();
console.log("")
console.log(dataFilm)


// soal - 4
    // Release 0
class Animal {
    constructor(animalName) {
        this._name = animalName;
        this._legs = 4;
        this._cold_blooded = false;
    }
    get name() {
        return this._name;
    }
    set name(animalName) {
        this._name = animalName;
    }
    get legs(){
        return this._legs;
    }
    get cold_blooded(){
        return this._cold_blooded;
    }
}

sheep = new Animal("shaun");
console.log(sheep.name); // shaun
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

console.log(" ")

    // Release 1
class Ape extends Animal{
    constructor(name) {
        super(name);
        this._legs = 2;
    }
    get legs() {
        return this._legs;
    }
    yell(){
        return console.log("Auooo");
    }
}
class Frog extends Animal{
    constructor(name){
        super(name);   
    }
    jump(){
        return console.log("hop hop") ;
    }
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

// untuk testing sungokong
// console.log(sungokong.name)
// console.log(sungokong.legs)
// console.log(sungokong.cold_blooded)

console.log(" ")
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

//untuk testing kodok
// console.log(kodok.name)
// console.log(kodok.legs)
// console.log(kodok.cold_blooded)


// soal - 5
class Clock {
    constructor({template}){
        var timer;
  
        function render() {
          var date = new Date();
      
          var hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          var mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          var secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
      
        this.stop = function() {
          clearInterval(timer);
        };
      
        this.start = function() {
          render();
          timer = setInterval(render, 1000);
        };
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  