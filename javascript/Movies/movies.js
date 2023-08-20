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
    new Movie("Titanic", 1997, ["Drama", "Romance"]),
  ];

  function sortByMostRecentYearFirst(movies) {
    return movies.slice().sort((a, b) => b.year - a.year);
  }
  function sortAlphabeticallyIgnoreArticles(movies) {
    const articlePattern = /^(A|An|The)\s/i;
    return movies.slice().sort((a, b) => {
      const titleA = a.title.replace(articlePattern, "");
      const titleB = b.title.replace(articlePattern, "");
      console.log("titleA:", titleA); 
      console.log("titleB:", titleB); 
      return titleA.localeCompare(titleB);
    });
  }
  
  module.exports = {sortAlphabeticallyIgnoreArticles,
    sortByMostRecentYearFirst,
    Movie};