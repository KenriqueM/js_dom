//Select the section with an id of container without using querySelector.

document.getElementByid("container");

//Select the section with an id of container using querySelector.

document.querySelector("#container");

//Select all of the list items with a class of "second".

document.body.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

document.body.children[1].lastElementChild.querySelector(".third");

//Give the section with an id of container the text "Hello!".



//Add the class main to the div with a class of footer.

var footerClass = document.querySelector(".footer");
footerClass.className = "main";


//Remove the class main on the div with a class of footer.

document.querySelector(".main").className = "footer";

//Create a new li element.

var elementLi = document.createElement("li");

//Give the li the text "four".

element.innerText = "four";

//Append the li to the ul element.

elementUi.appendChild(elementLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".



//Remove the div with a class of footer.