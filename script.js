// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  this.classList.toggle("active");

  /* Toggle between hiding and showing the active panel */
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});
}


// Scrolling title
(function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
  }, 500);
}(" Typography & Interaction 2: Section B, Spring 2022 "));


// randomizer
const array = ["Krishangi", "Liam", "Jess", "Antoinette", "Madhu", "Amy", "Bryan", "So Young", "Giordana", "Maria", "Carla", "Thao", "Ashley"]

const arrayClone = array.slice()
let arrayLength = array.length
let newArray = []

for (  let i = 0; i < 13; i++) {
    let arr = arrayClone[Math.floor(Math.random() * arrayLength)]
    arrayLength--
    let index = arrayClone.indexOf(arr)
    arrayClone.splice(index, 1)
    newArray.push(arr)
 }

  randomizer.onclick = function() {
    console.log(newArray);
}
