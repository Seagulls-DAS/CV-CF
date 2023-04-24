let contact = document.getElementById("index");
let diplomes = document.getElementById("diplomes");
let d1 = document.getElementById("contact");
let d2 = document.getElementById("formation");
contact.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "flex";
    d2.style.display = "none"
  }
})

function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "flex";
    d1.style.display = "none"
  }
};
diplomes.onclick = togg;