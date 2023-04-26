let contact = document.getElementById("index");
let diplomes = document.getElementById("diplomes");
let exp = document.getElementById("Exp");
let skills = document.getElementById("skills")
let passions = document.getElementById("passions")
let d1 = document.getElementById("contact");
let d2 = document.getElementById("formation");
let d3 = document.getElementById("XP")
let d4 = document.getElementById("Competences")
let d5 = document.getElementById("freetime")
contact.addEventListener("click", () => {
  if (getComputedStyle(d1).display != "none") {
    d1.style.display = "none";
  } else {
    d1.style.display = "flex";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
    d5.style.display = "none";
  }
})

function togg1() {
  if (getComputedStyle(d2).display != "none") {
    d2.style.display = "none";
    togg1.style.transform = 'translateY(${d2.clientY - 300}px)';
  } else {
    d2.style.display = "flex";
    d1.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
    d5.style.display = "none";
  }
};
diplomes.onclick = togg1;

function togg2() {
  if (getComputedStyle(d3).display != "none") {
    d3.style.display = "none";
  } else {
    d3.style.display = "flex";
    d1.style.display = "none";
    d2.style.display = "none";
    d4.style.display = "none";
    d5.style.display = "none";
  }
};
Exp.onclick = togg2;

function togg3() {
  if (getComputedStyle(d4).display != "none") {
    d4.style.display = "none";
  } else {
    d4.style.display = "flex";
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d5.style.display = "none";
  }
};
skills.onclick = togg3;

function togg4() {
  if (getComputedStyle(d5).display != "none") {
    d5.style.display = "none";
  } else {
    d5.style.display = "flex";
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
  }
};
passions.onclick = togg4;
