var elP = "Formula 1 poygasiga xush kelibsiz?";
var elName = "Ismingiz nima?";
var elLastName = "Familiyangiz nima?";
var elYears = "Yoshingizni yozing?";

var answeerElName = prompt(elName).trim();
var answeerElLastName = prompt(elLastName).trim();
var answeerElYears = prompt(elYears).trim();

var paragraph = document.createElement("p");
paragraph.textContent =  'Malumot!';
document.body.appendChild(paragraph); 

var paragraph = document.createElement("p");
paragraph.textContent = `Ishtirokchi ismi, ${answeerElName}`;
document.body.appendChild(paragraph);

var paragraph = document.createElement("p");
paragraph.textContent = `Ishtirokchi familiyasi ,${answeerElLastName}`;
document.body.appendChild(paragraph);

var paragraphYears = document.createElement("p");
paragraphYears.textContent = `Ishtirokchi yoshi , ${answeerElYears}`;
document.body.appendChild(paragraphYears);

if (answeerElYears >= 17 && answeerElYears <= 60 ) {
  alert("qabul qilindingiz")
} 

else if (isNaN(answeerElYears)) {
  alert("son kiriting!")
  paragraphYears.textContent = `Ishtirokchi yoshi , ${"son kiritilsin"}`;
}

else if (answeerElYears) {
  paragraphYears.textContent = `Ishtirokchi yoshi , ${"hali yoshsiz"}`;

}

else {
  alert("hali yoshsiz")
}












