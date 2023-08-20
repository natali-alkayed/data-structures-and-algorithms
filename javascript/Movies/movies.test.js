const { sortAlphabeticallyIgnoreArticles, sortByMostRecentYearFirst } = require("./movies"); 
const { Movie } = require("./movies"); 

describe("Movie Sorting", () => {
  const movies = [
    new Movie("The Avengers", 2012, ["Action", "Sci-Fi"]),
    new Movie("An Inception", 2010, ["Action", "Sci-Fi"]),
    new Movie("Titanic", 1997, ["Drama", "Romance"]),
  ];

  const sortedByYear = sortByMostRecentYearFirst(movies);
  const sortedAlphabetically = sortAlphabeticallyIgnoreArticles(movies);

  it("should sort movies by most recent year first", () => {
    expect(sortedByYear[0].title).toBe("The Avengers");
  });

  it("should sort movies alphabetically, ignoring articles", () => {
    expect(sortedAlphabetically[0].title).toBe("The Avengers");
  });
});