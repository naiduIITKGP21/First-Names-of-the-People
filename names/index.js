const peopleNames = require("../country/state/city/index");
const getfirstNames = require("../utilities/utils/index");
const getPeopleInCity = (peopleNames) => {
  const firstNames = getfirstNames(peopleNames);
  return firstNames;
};
console.log(getPeopleInCity);
module.exports = getPeopleInCity;
