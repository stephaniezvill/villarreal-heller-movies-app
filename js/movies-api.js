"use strict";

let movies = [];
const MOVIE_HOST = "http://localhost:3000";

export async function getAllMovies() {
    try {
        return fetch(`${MOVIE_HOST}/movies`)
            .then(response => response.json());
    } catch(error) {
        console.error (error);
    }
}

export async function addMovie(movie) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(movie)
        }
        return fetch(`${MOVIE_HOST}/movies`, options)
            .then(response => response.json());
    }
    catch {
        console.error(error);
    }
}

export async function editMovie(movie) {
    try {
        console.log("editMethod")
        const options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(movie)
        };
        return fetch (`${MOVIE_HOST}/movies/${movie.id}`, options)
            .then(response => response.json());
    }
    catch(error) {
        console.error (error);
    }
}

export async function deleteMovie(id) {
    try {
        const options = {
            method: "DELETE"
        }

        return fetch(`${MOVIE_HOST}/movies/${id}`, options)
            .then(response => response.json());
    } catch (error) {
        console.error (error);
    }
}