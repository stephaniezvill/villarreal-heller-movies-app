import * as api from "./movies-api.js";

"use strict";

let movie;

movie = api.getMovie(2);

console.log(movie);