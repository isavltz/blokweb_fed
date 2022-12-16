/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

var deButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");

deButton.addEventListener("click", toggleMenu);
function toggleMenu() {  
  deNav.classList.toggle("toonMenu");
}

/* bonus: menu sluiten met escape */
window.addEventListener("keydown", handleKeydown);
function handleKeydown(event) {
  if (event.key == "Escape") {
    deNav.classList.remove("toonMenu");
  }
}
