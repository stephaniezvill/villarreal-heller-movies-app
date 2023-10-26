"use strict";

let movies = [];

export async function getAllMovies() {
    let movies = await fetch("http://localhost:3000/movies")
        .then(response => response.json());
    return movies;
}

export async function getMovie(id) {
    movies = getAllMovies();
    for (let movie of movies) {
        if (movie.id === id) {
            return movie;
        }
    }
}

export async function addMovie(name) {

}

export async function editMovie(id) {

}

async function deleteMovie(id) {

}