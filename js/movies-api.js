"use strict";

let movies = [];
const MOVIE_HOST = "http://localhost:3000";

export async function getAllMovies() {
    try {
        return fetch(`${MOVIE_HOST}/movies`)
            .then(response => response.json())
            .then(movies => movies);
    } catch(error) {
        console.error (error);
    }
}

export async function getMovie(id) {
    try {
        movies = await getAllMovies();
        for (let movie of movies) {
            if (movie.id === id) {
                return movie;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

export async function addMovie(name) {

}

export async function editMovie(id) {

}

async function deleteMovie(id) {

}