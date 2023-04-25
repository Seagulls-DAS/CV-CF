let contact = document.getElementById("index");
let diplomes = document.getElementById("diplomes");
let exp = document.getElementById("Exp");
let d1 = document.getElementById("contact");
let d2 = document.getElementById("formation");
let d3 = document.getElementById("XP")
contact.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "flex";
    d2.style.display = "none";
    d3.style.display = "none";
  }
})

function togg1(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "flex";
    d1.style.display = "none";
    d3.style.display = "none";
  }
};
diplomes.onclick = togg1;

function togg2(){
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "flex";
    d1.style.display = "none";
    d2.style.display = "none";
  }
};
Exp.onclick = togg2;
