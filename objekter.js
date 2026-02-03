// --- Opgave 1 ---
let person = {
    firstname: "Ole",
    lastname: "Erling",
    age: 54,
    hometown: "Roskilde",
    pet: "Klapperslange",
    petname: "Holger"
}
console.log("Opgave 1", person.firstname);
console.log("Opgave 1", person.lastname);
console.log("Opgave 1", person.age);
console.log("Opgave 1", person["hometown"]);
console.log("Opgave 1", person["pet"]);
console.log("Opgave 1", person["petname"]);

// --- Opgave 2 ---
let person2 = {
    firstname: "Ole",
    lastname: "Erling",
    married: true,
    age: 54,
    hometown: "Roskilde",
    hobbies: ["Reptiler", "Frimærker", "Programmering"],
    pet: { 
        type: "Klapperslange",
        name: "Holger"
    },
}
person2.hobbies.forEach(function(hobby) {
    console.log("Opgave 2", hobby);
})
console.log("Opgave 2", person2.pet["type"]);
console.log("Opgave 2", person2.pet.name);

// --- Opgave 3 ---
console.log("Opgave 3", );