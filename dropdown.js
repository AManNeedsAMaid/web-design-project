/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdown() {
  document.getElementById("nav-dropdown").classList.toggle("show");
}

function mySubDropdown() {
  document.getElementById("nav-subdropdown").classList.toggle("subdrop-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches([".drop-button", ".subdropdown-button"])) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    var subDropdowns = document.getElementsByClassName("subdropdown-content");
    var i;
    for (i = 0; i < subDropdowns.length; i++) {
      var openSubDropdown = subDropdowns[i];
      if (openSubDropdown.classList.contains("subdrop-show")) {
        setTimeout(function () {
          openSubDropdown.classList.remove("subdrop-show");
        }, 1000);
      }
    }
  }
};
