// import * as api from "./movies-api.js";
//
// "use strict";
//
// let movie;
//
// async function main() {
//
//     let movies = await api.getAllMovies();
//     // movie = api.getMovie(3);
//
//     console.log(movies);
// }
//
// main();

// console.log(movie);

<<<<<<< HEAD
const editButtons = document.querySelectorAll("button.edit");

const addCardButton = document.querySelector("header button");

const addCardSubmitButton = document.querySelector("div#addCardFormWrapper button");

const removeButtons = document.querySelectorAll("button.remove");

/* adding button click to toggle form on and off */
addCardButton.addEventListener('click', () =>{
    document.querySelector("#addCardFormWrapper").classList.toggle('hideForm');
    document.querySelector("#addCardFormWrapper").classList.toggle('showForm');

})

addCardSubmitButton.addEventListener('click', event => {
    event.preventDefault();
    const newCardTitle = document.querySelector("#title").value;

    const newCardImageLink = document.querySelector("#image").value;

    const newCardDescription = document.querySelector("#description").value;

    const newCard = document.createElement("div");
    newCard.classList.add('gizmo');

    // Step 1: create the element
    const newCardH2Element = document.createElement("h2");
    // Step 2: use JS methods to define the element's attributes and content
    newCardH2Element.innerText = newCardTitle;
    // Step 3: add the element to the DOM
    newCard.appendChild(newCardH2Element);

    const newCardImgElement = document.createElement("img");
    newCardImgElement.src = newCardImageLink;
    newCardImgElement.alt = newCardTitle;
    newCard.appendChild(newCardImgElement);

    const newCardParagraphElement = document.createElement("p");
    newCardParagraphElement.innerText = newCardDescription;
    newCard.appendChild(newCardParagraphElement);

    const newCardEditButton = document.createElement("button");
    newCardEditButton.innerText = "Edit";
    newCardEditButton.addEventListener('click', handleEditButtonClick);
    newCard.appendChild(newCardEditButton);

    const newCardRemoveButton = document.createElement("button");
    newCardRemoveButton.innerText = "Remove";
    newCardRemoveButton.addEventListener('click', handleRemoveButtonClick);
    newCard.appendChild(newCardRemoveButton);

    document.querySelector("#gizmos").appendChild(newCard);
    addCardButton.click();
})

function handleEditButtonClick(event){
    const headingText = event.target.parentElement.firstElementChild.innerText;
    console.log(headingText);

    const imageLink = event.target.parentElement.querySelector("img").getAttribute("src");
    console.log(imageLink);

    const description = event.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText;
    console.log(description);

    event.target.parentElement.firstElementChild.innerText = prompt("Enter the new title");

}

editButtons.forEach(editButton => {
    editButton.addEventListener('click', handleEditButtonClick);
});

function handleRemoveButtonClick (event) {
    if(confirm("Are you sure?")){
        event.target.parentElement.remove();
    }
}

removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', handleRemoveButtonClick);
});


/*------ alternate handleEditButtonClick function ------- */

// function handleEditButtonClick(event){
//     const cardElements = event.target.parentElement.children;
//     for (let cardElement of cardElements) {
//         cardElement.addEventListener('mouseenter', ()=> {
//             cardElement.style.transform = "scale(1.2)";
//             cardElement.style.backgroundColor = "rgba(91, 83, 83, 1.0)";
//             cardElement.style.transition = "transform 0.4s ease-in, background-color 0.4s ease-in";
//         });
//         cardElement.addEventListener('mouseout', ()=> {
//             cardElement.style.transform = "unset";
//             cardElement.style.backgroundColor = "unset";
//         });
//     }
// }
=======
async function main() {

    // let newMovie = {
    //     "title": "Future Movie",
    //     "director": "Some Guy",
    //     "released": 2121,
    //     "rating": 3,
    //     "genre": "Horror",
    //     "movieSummary": "New Summary",
    // }
    // newMovie = await api.addMovie(newMovie);
    // newMovie.genre = "Something else";
    // newMovie = await api.editMovie(newMovie);
    // let deletedMovie = await api.deleteMovie(12)
//     let movies = await api.getAllMovies();
// try {
//     console.log(newMovie);
//     console.log(movies);
// } catch (error) {
//     console.error(error);
// }
}

main();
>>>>>>> 2d8383b22f5a2d69d4f32986f5fc048abcccb8d9
