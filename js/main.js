import * as api from "./movies-api.js";

"use strict";

let movie;

async function main() {

    let movies = await api.getAllMovies();
    // movie = api.getMovie(3);

    console.log(movies);
}

main();

console.log(movie);


async function main() {

    let newMovie = {
        "title": "Future Movie",
        "director": "Some Guy",
        "released": 2121,
        "rating": 3,
        "genre": "Horror",
        "movieSummary": "New Summary",
    }
    newMovie = await api.addMovie(newMovie);
    newMovie.genre = "Something else";
    newMovie = await api.editMovie(newMovie);
    let deletedMovie = await api.deleteMovie(12)
    let movies = await api.getAllMovies();
try {
    console.log(newMovie);
    console.log(movies);
} catch (error) {
    console.error(error);
}
}

main();
