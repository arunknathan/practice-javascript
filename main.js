
window.onload = function () {
    this.console.log("window has been loaded")

    var Human = {
        id: 'Generic Human',
        genus: 'Homo',
        species: 'Sapien',
        walk: function () {
            console.log(this.id + ' is walking like a Human')
        }
    }

    Human.walk()

    var Person = Object.create(Human)
    Person.id = 'Arun';
    Person.walk = function () {
        console.log(this.id + ' is walking like a Person')
    }

    Person.walk()

    // IIFE
    console.log("dummy=" + (function () {
        console.log("Dummy invoked");
        return true;
    })())
}