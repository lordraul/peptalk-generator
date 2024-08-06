document.body.onload = addElement;

fetch("options.json")
  .then((response) => response.json())
  .then((json) => console.log(json));

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("reel1");
  console.log(currentDiv);
  currentDiv.parentElement.insertBefore(newDiv, currentDiv);
}