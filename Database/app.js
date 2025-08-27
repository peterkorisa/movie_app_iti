const fs = require('fs');

function loadMovies() {
    const data = fs.readFileSync('movies.json', 'utf8');
    return JSON.parse(data);
}

function findMoviesById(id) {
    const movies = loadMovies();
    return movies.find(movie => movie.id === id);
}

function findMoviesByNameSubstring(substring) {
    const movies = loadMovies();
    const lowerSub = substring.toLowerCase();
    return movies.filter(movie => movie.title.toLowerCase().includes(lowerSub));
}

// Example usage:
console.log(findMoviesById(1212855)); // Search by ID
console.log(findMoviesByNameSubstring('a')); // Search by name substring
