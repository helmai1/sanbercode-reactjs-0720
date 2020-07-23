// soal - 1
var index = 2;
var hasil = 2;

console.log("LOOPING PERTAMA");
while (hasil <= 20) {
  console.log(hasil + " - I love coding");
  hasil = index + 2;
  index += 2;
}

console.log("LOOPING KEDUA")
var index = 20;
while (index >= 2) {
  console.log(index + " - I will become a frontend developer")
  index = index - 2;
}
console.log("");


// soal - 2
for (var index = 1; index <= 20; index++) {
  if (index % 2 == 0) {
    console.log(index + ' - Berkualitas');
  } else if (index % 3 == 0) {
    console.log(index + ' - I Love Coding');
  } else {
    console.log(index + ' - Santai');
  }
}
console.log("");


// soal - 3
for (index = 0; index < 7; index++) {
  for (index = 0; index < 7; index++) {
    console.log("#");
    for (index = 0; index < 6; index++) {
      console.log("##");
      for (index = 0; index < 5; index++) {
        console.log("###");
        for (index = 0; index < 4; index++) {
          console.log("####");
          for (index = 0; index < 3; index++) {
            console.log("#####");
            for (index = 0; index < 2; index++) {
              console.log("######");
              for (index = 0; index < 1; index++) {
                console.log("#######");
              }
            }
          }
        }
      }
    }
  } 
}
console.log("");



// soal - 4
var kalimat = "saya sangat senang belajar javascript"

var kataPertama = kalimat.substring(0, 4);
var kataKedua = kalimat.substring(5, 11);
var kataKetiga = kalimat.substring(12, 18);
var kataKeempat = kalimat.substring(19, 26);
var kataKelima = kalimat.substring(27, 37);

var kalimatArr = [kataPertama, kataKedua, kataKetiga, kataKeempat, kataKelima];

console.log(kalimatArr);


console.log("");



// soal - 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
var stringConv = daftarBuah.join("\n")
console.log(stringConv);




