const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));
console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const selectingDrivers = [ returnFirstTwoDrivers ,returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return fare * multiplier;
  };
};

const fareMultiplierBy4 = createFareMultiplier(4);
console.log(fareMultiplierBy4(10));

const fareDoubler = (fare) => {
  const doubler = createFareMultiplier(2);
  return doubler(fare);
};

// console.log(fareDoubler(10));

const fareTripler = (fare) => {
  const tripler = createFareMultiplier(3);
  return tripler(fare);
};

console.log(fareTripler(10));

const selectDifferentDrivers = (drivers, selector) => {
  return selector(drivers);
};

console.log(
  selectDifferentDrivers(
    ["Antonia", "Nuru", "Amari", "Mo"],
    returnFirstTwoDrivers
  )
);
console.log(
  selectDifferentDrivers(
    ["Antonia", "Nuru", "Amari", "Mo"],
    returnLastTwoDrivers
  )
);
