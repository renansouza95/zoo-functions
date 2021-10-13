const data = require('../data/zoo_data');

// funcao feita com o auxilio do caique
function countEntrants(entrants) {
  if (!Array.isArray(entrants)) {
    return 0;
  }
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return { child, adult, senior };
  // return {
  //   child: entrants.filter((person) => person.age < 18).length,
  //   adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
  //   senior: entrants.filter((person) => person.age >= 50).length,
  // }
}

// funcao feita junto com o Josue
function calculateEntry(entrants) {
  const visitantes = countEntrants(entrants);
  if (!Array.isArray(entrants)) {
    return 0;
  }
  // const { prices } = data
  const sumChild = data.prices.child * visitantes.child;
  const sumAdult = data.prices.adult * visitantes.adult;
  const sumSenior = data.prices.senior * visitantes.senior;
  return sumChild + sumAdult + sumSenior;
}

module.exports = { calculateEntry, countEntrants };
