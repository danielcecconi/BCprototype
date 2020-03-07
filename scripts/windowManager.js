//Members product links are selected in order to add 'event listeners' to them.
let links = document.querySelectorAll(".link")
let openedWindow;
let clickedLink;
//'Event Listeners' are added to the links.
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", checkWindow)
}
//Check if an order window is already open, if it is close it.
function checkWindow(event) {
  //Prevent default action for the anchor tags (the links).
  event.preventDefault();
  //Using the event object to select the link that was clicked.
  clickedLink = event.currentTarget;
  if (!openedWindow) {
    //If the window hasn't been opened then open it.
    openWindow();
  } else if (openedWindow.closed) {
    //If the order window has been closed then open a new window.
    openWindow();
  } else {
    //Close the old window and open the new window.
    closeWindow();
    openWindow();
  }
}
//Open window and use the content of the links 'href' attribute to do it.
function openWindow() {
  let linkContent = clickedLink.getAttribute("href");
  openedWindow = window.open(linkContent);
}
//Close the window, if it exists.
function closeWindow() {
  if (openedWindow) {
    openedWindow.close();
  }
}
