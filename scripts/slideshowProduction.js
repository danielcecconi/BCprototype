//Thumbnails are selected in order to attach 'event listeners'.
let imageThumbnails = document.querySelectorAll(".thumbnail");
//'Event listeners' are attached to each thumbnail.
for (let i = 0; i < imageThumbnails.length; i++) {
  imageThumbnails[i].addEventListener("click", enlarge);
}
//Once a thumbnail is clicked, an event is triggered and this enlarge function is called.
function enlarge(event) {
  //The enlargement image element is selected.
  let enlargement = document.querySelector(".enlargement");
  //The thumbnail that was clicked is selected using the event object.
  let selectedThumbnail = event.target;
  //The src attribute is grabbed from the selected thumbnail.
  let enlargementSrc = selectedThumbnail.getAttribute("src");
  //The src attribute from the selected thumbnail is set as the src for the 'enlargement' image element.
  enlargement.setAttribute("src", enlargementSrc);
}
