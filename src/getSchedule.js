const data = require('../data/zoo_data');

const { hours, species } = data;

function getCompleteSchedule() {
  const schedule = {};
  const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  for (let i = 0; i <= 5; i += 1) {
    const avail = species.filter((specie) => specie.availability.includes(weekDays[i]));
    schedule[weekDays[i]] = {
      officeHour: `Open from ${hours[weekDays[i]].open}am until ${hours[weekDays[i]].close}pm`,
      exhibition: avail.map((animal) => animal.name) };
  }
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return schedule;
}

function getSchedule(scheduleTarget) {
  const completeSchedule = getCompleteSchedule();
  // console.log(completeSchedule);
  const findAnimal = species.find((specie) => specie.name === scheduleTarget);
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (weekDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: completeSchedule[scheduleTarget] };
  }
  if (findAnimal) { return findAnimal.availability; }
  return completeSchedule;
}

module.exports = getSchedule;
