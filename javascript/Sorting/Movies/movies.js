class Movie {
  constructor(title, year, genres) {
    this.title = title;
    this.year = year;
    this.genres = genres;
  }
}

const movies = [
  new Movie("The Avengers", 2012, ["Action", "Sci-Fi"]),
  new Movie("An Inception", 2010, ["Action", "Sci-Fi"]),
  new Movie("Titanic", 2023, ["Drama", "Romance"]),
];


function sortByYears(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortAlphabetically(movies) {
  const IgnoredPattern = /^(A|An|The)\s/i;
  // i use regix to implement IgnoredPattern
  return movies.sort((a, b) => {
    const titleA = a.title.replace(IgnoredPattern, "");
    const titleB = b.title.replace(IgnoredPattern, "");
    return titleA.localeCompare(titleB);
  });
}

//console.log(sortByYears(movies));
//console.log(sortAlphabetically(movies));
  
  module.exports = {sortAlphabetically,
    sortByYears,Movie};