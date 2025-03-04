// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let searchForDirector = array.filter(movie => movie.director === director);
 console.log("EXERCICE 2 ->", searchForDirector)
 return searchForDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorSearch = getMoviesFromDirector(array, director);
  let average = directorSearch.reduce((total, scores) => total + scores.score, 0) / directorSearch.length;
  console.log("EXERCISE 3 ->", average);
  return parseFloat(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles =  array.map(movie => movie.title);
  let orderedTitles = titles.sort()
  return orderedTitles.slice(0, 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let auxArray = [...array]; // Creem una còpia de l'array original
  auxArray.sort((a, b) => {
    // ordenar anys
    if (a.year !== b.year) {
      return a.year - b.year;
    } return a.title.localeCompare(b.title);
    // ordenar per títol
  });
  return auxArray;
  
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let searchForGenre = array.filter(movie => movie.genre.includes(genre));
  let averageGenre = searchForGenre.reduce((total, scores) => total + scores.score, 0) /searchForGenre.length;
  return parseFloat(averageGenre.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
