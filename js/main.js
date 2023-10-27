import * as api from "./movies-api.js";

"use strict";
let movies = [];
let movie, posterURL, poster;
let movieCard, movieCardBody, title, rating, summary, footer, buttonDiv, editButton, deleteButton;

const mainContainer = document.getElementById("card-container");

let modal = document.getElementById("editModal");
let titleField = document.getElementById("title-field");
let ratingField = document.getElementById("rating-field");
let descriptionField = document.getElementById("description-field");

async function main() {

    setTimeout(function() {
        let spinner = document.querySelector(".loader");
        spinner.style.visibility = "hidden";
        spinner.style.display = "none";
    }, 2000);

    document.getElementById('addCardButton').addEventListener('click', function() {

        let form = document.getElementById('addCardFormWrapper');
        if (form.style.visibility === 'hidden') {
            form.style.visibility = 'visible';
            form.style.display = "block";
        } else {
            form.style.visibility = 'hidden';
            form.style.display = "none";
        }
    });

    document.getElementById("addSubmit").addEventListener("click", async function() {
        let titleField = document.getElementById("title");
        let ratingField = document.getElementById("rating");
        let descField = document.getElementById("description");

         movie = {
            title: titleField.value,
            rating: ratingField.value,
            movieSummary: descField.value
        };

        let newMovie = await api.addMovie(movie)
        await updateDisplay();
    });


    let closeButton = document.getElementById("close");
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modal.style.visibility = "hidden";
    });

    let saveChanges = document.getElementById("save-changes");
    saveChanges.addEventListener("click",async function () {

        let editedMovie = { title:titleField.value, rating:ratingField.value,movieSummary: descriptionField.value, id:this.getAttribute("data-id")};
        editedMovie = await api.editMovie(editedMovie);

        modal.style.display = "none";
        modal.style.visibility = "hidden";
        updateDisplay();
    });

    await updateDisplay();
}

async function updateDisplay() {

    mainContainer.innerHTML = "";

    movies = await api.getAllMovies();
    for (let movie of movies) {

        // Get poster for each movie
        await fetch(`http://omdbapi.com/?apikey=${OMDB_KEY}&t=${movie.title}`)
            .then(response => response.json())
            .then(data => {
                posterURL = data.Poster;
            });
        poster = document.createElement("img");
        poster.srcset = posterURL;

        movieCard = document.createElement("div");
        movieCard.classList.add("card", "mx-auto", "my-2");
        movieCardBody = document.createElement("div");
        movieCardBody.classList.add("card-body")
        title = document.createElement("h5");
        title.innerText = movie.title;
        title.classList.add("card-title");
        rating = document.createElement("h6")
        rating.innerHTML = "Rating: " + movie.rating;
        summary = document.createElement("p");
        summary.innerText = movie.movieSummary;
        summary.classList.add("card-text");
        footer = document.createElement("div");
        footer.classList.add("card-footer")
        buttonDiv = document.createElement("div");
        buttonDiv.classList.add("btn-group", "float-end");
        editButton = document.createElement("input");
        editButton.classList.add("btn", "btn-dark", "btn-sm")
        editButton.setAttribute("type", "button");
        editButton.setAttribute("value", "Edit");
        deleteButton = document.createElement("input");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm")
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Delete");
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        footer.appendChild(buttonDiv);
        movieCardBody.appendChild(poster);
        movieCardBody.appendChild(title);
        movieCardBody.appendChild(rating);
        movieCardBody.appendChild(summary);
        movieCard.appendChild(movieCardBody);
        movieCard.appendChild(footer);
        mainContainer.appendChild(movieCard);


        deleteButton.addEventListener("click", async function() {
            let badMovie = await api.deleteMovie(movie.id);
            await updateDisplay();

        });
        editButton.addEventListener("click", async function() {
            if (modal.style.visibility === 'hidden') {
                modal.style.visibility = 'visible';
                modal.style.display = "block";
            } else {
                modal.style.visibility = 'hidden';
                modal.style.display = "none";
            }

            titleField.value = movie.title;
            ratingField.value = movie.rating;
            descriptionField.value = movie.movieSummary;

            document.querySelector("#save-changes").setAttribute("data-id", movie.id);

        });
    }
}

main();

