// ==== CONSULTING ==== //
console.log(document); // this way you can access the html (DOM) of your site via console
// the DOM is like a tree that have branches (tags) and leafs (texts)
console.log(document.getElementsByTagName('body')); // you have various functions to call the DOM and visualize the html of your site
console.log(document.getElementById('title'));
console.log(document.getElementsByClassName('class')); // all of this selectors are useful to make edits in groups
console.log(document.querySelector('h1')); // this guy is the boss of all selectors, you can put elements with its names and the guy will catch them for you

// ==== EDITING ==== //
let span = document.createElement("span");
let el = document.querySelector("h1");
let father = el.parentNode;
father.insertBefore(span, el); // this way you can insert an element before another element, in this case you're insering 'span' before 'el'
father.appendChild(span); // this way you can insert an element inside the father element but in the last index

// ==== EVENTS ==== //
let button = document.querySelector('#btutton');
button.addEventListener("click", function() {
  console.log("Clicked");
}); // events is basically reactions of some actions that you took, in this case the action is clicking in a button and the event is the console message
button.removeEventListener("click"); // removing an event of a tag
function message(message) {
  console.log("This is a message");
  message.stopPropagation(); // with this function you stop the event to call another event when activated, preventing some not so funny cases (propagation)
}
button.addEventListener("click", message); // this way you call a external function to send the event
let link = document.querySelector("link");
link.preventDefault(); // this way you can prevent default events embebbed in html code, like clicking in a link and opening the link in the browser automatic

window.addEventListener("keydown", function(event) { // this way you can monitor the actions with the keyboard and create events for any key clicked, you can do the same thing using mouse buttons
  if (event.key == 'w') {
    console.log("You press the W key");
  } else if (event.key == 'Enter') {
    console.log('You press the Enter key');
  }
})
window.addEventListener("keyup", function(event) {
  if (event.key == 'w') {
    console.log("You release the W key");
  } else if (event.key == 'Enter') {
    console.log('You release the Enter key');
  }
})

window.addEventListener("mousemove", function(event) { // this way you can add events based on the movement of the mouse, but this inst the best thing to do because you can use much proccessing
  console.log(event.x);
  console.log(event.y);
})

window.addEventListener("scroll", function(event) { // events based in the mouse scroll
  if (window.scrollY > 1000) {
    console.log("You reach the page limit");
  }
})
// you have diverse others event types, probably if you need a especific type event to do a task, this event already exists

