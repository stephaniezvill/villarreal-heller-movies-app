import * as api from "./movies-api.js";

"use strict";

let movie;

async function main() {

    let movies = await api.getAllMovies();
    // movie = api.getMovie(3);

    console.log(movies);
}

main();

// console.log(movie);