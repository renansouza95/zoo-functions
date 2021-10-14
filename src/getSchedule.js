const data = require('../data/zoo_data');
const { hours, species } = data;

function getCompleteSchedule() {
  const tuesdayAnimals = species.filter((specie) => specie.availability.includes('Tuesday'));
  const wednesdayAnimals = species.filter((specie) => specie.availability.includes('Wednesday'));
  const thursdayAnimals = species.filter((specie) => specie.availability.includes('Thursday'));
  const fridayAnimals = species.filter((specie) => specie.availability.includes('Friday'));
  const saturdayAnimals = species.filter((specie) => specie.availability.includes('Saturday'));
  const sundayAnimals = species.filter((specie) => specie.availability.includes('Sunday'));
  return {
    Tuesday: {
      officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
      exhibition: tuesdayAnimals.map((animal) => animal.name),
    },
    Wednesday: {
      officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
      exhibition: wednesdayAnimals.map((animal) => animal.name),
    },
    Thursday: {
      officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
      exhibition: thursdayAnimals.map((animal) => animal.name),
    },
    Friday: {
      officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
      exhibition: fridayAnimals.map((animal) => animal.name),
    },
    Saturday: {
      officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
      exhibition: saturdayAnimals.map((animal) => animal.name),
    },
    Sunday: {
      officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
      exhibition: sundayAnimals.map((animal) => animal.name),
    },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!', }
  };
}

function getSchedule(scheduleTarget) {
  const completeSchedule = getCompleteSchedule();
  const findAnimal = species.find((specie) => specie.name === scheduleTarget);
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (daysOfWeek.includes(scheduleTarget)) {
    return {[scheduleTarget]: completeSchedule[scheduleTarget]};
  } else if (findAnimal) {
    return findAnimal.availability;
  }
  return completeSchedule;
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
