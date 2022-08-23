// DOM
// Eventlistener -> function

// document.getElementById(id)
// eg. my-div
// return the element with id
// Null is returned if the id does not exist in any element

// OLD
// document.getElementsByClassname(classname)
// eg. boxes
// returns the elements ****array**** that match this classname. Empty array is returned if there is no matching element
// but this array cannot use map, filter...

// NEW
// document,querySelector(cssSelector)
// document.querySelectorAll(cssSelector)

//ALWAYS USE NEW

// Element Events
// eg. click , scroll , load , keydown , focus , resize , ...

document.querySelector("#test").addEventListener("click", function (event) {
  console.log("Test is clicked");
});

// onclick vs addEventListener?
// what is the differenece?
// document.querySelector("#test").onclick= function (event) {
//     console.log("Test is clicked");
//   };
// document.querySelector("#test").addEventListener("click", function (event) {
//     console.log("Test is clicked");
//   });

// test.removeEventListener('click' , function(){})

// event methods
// event.timestamp()
// event.preventDefault()
// event.stopPropagation()
// event.stopImmediatePropagation

//Event Attributes

//DOM Manipulations
// <div id="test">
//      1 -> 2 -> 3 -> 4
// </div>;

document.querySelector("#test").onclick = function (event) {
  event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
};
document.querySelector("#test").addEventListener("click", function () {
  event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
});

// event.target
// event.currenttarget
