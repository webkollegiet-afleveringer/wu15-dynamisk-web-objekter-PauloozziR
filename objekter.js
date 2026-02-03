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
let students = [
    { name: "Sofie", age: 25, course: "Webudvikler"},
    { name: "Lukas", age: 22, course: "Mediegrafiker"},
    { name: "Emil", age: 28, course: "Teknisk designer"},
];
let = studentListDiv = document.querySelector(".student-list");
students.forEach(function(student) {
    const studentDiv = document.createElement("div");
    studentDiv.textContent = "Navn: " + student.name + ", Alder: " + student.age + ", Uddannelse: " + student.course;
    studentListDiv.append(studentDiv);
});

// --- Opgave xtra ---
students.forEach(student => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student");
    let studentHeadline = document.createElement("h2");
    studentHeadline.textContent = "Navn: " + student.name;
    let studentInfo = document.createElement("p");
    studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentDiv.append(studentHeadline, studentInfo);
    studentListDiv.appendChild(studentDiv);
});
console.log("Opgave 3 og xtra", studentListDiv);