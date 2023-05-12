const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multi) {
    return (fare) => fare * multi;
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers)
}


