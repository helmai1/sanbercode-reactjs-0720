// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di 
readBooks(10000, books[0], function() {
    console.log(books[0].timeSpent)
},books[0].timeSpent) 

readBooks(10000, books[1], function() {
    console.log(books[1].timeSpent)
},books[1].timeSpent) 

readBooks(10000, books[2], function() {
    console.log(books[2].timeSpent)
},books[2].timeSpent) 

readBooks(10000, books[3], function() {
    console.log(books[3].timeSpent)
},books[3].timeSpent) 