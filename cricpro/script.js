var displayTextLinks = document.querySelectorAll(".displayText");
var imageContainer = document.querySelector(".imageContainer");
var displayedImg = document.getElementById("displayedImg");

displayTextLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var imageSrc = link.getAttribute("data-image");
    displayedImg.src = imageSrc;
    imageContainer.style.display = "block";
  });
});