class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }
  add(movie) {
    this.push(movie);
  }
  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

const favMovies = new MovieCollection(
  'My Favorite Movies',
  { name: 'Bee Movie', stars: 10 },
  { name: 'Star Wars Trek', stars: 1 },
  { name: 'Virgin Suicides', stars: 7 },
  { name: 'King of the Road', stars: 8 },
);

// for (const movie in favMovies) { console.log(movie) }
// for (const movie of favMovies){ console.log(movie) }
console.log(Object.entries(favMovies));
Object.keys(favMovies);
Object.entries(favMovies);
