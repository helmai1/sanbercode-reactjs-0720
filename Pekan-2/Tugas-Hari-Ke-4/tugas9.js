// soal - 1
const fullName = (firstName, lastName) => { return console.log(firstName + " " + lastName)};
fullName("Helmi", "Effendi")


// soal - 2
/*object*/
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
/*destructing*/
const {firstName, lastName, destination, occupation, spell} = newObject
/*Driver code*/
console.log(firstName, lastName, destination, occupation)


// soal - 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)