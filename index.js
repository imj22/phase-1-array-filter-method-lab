// Code your solution here


// findMatching:
// - returns all drivers that match the passed names from "drivers" array
// - returns matching drivers if case does not match but letters do
// - returns an empty array if there is no match


// function findMatching(){
//     const 
// }

function findMatching(driversArr, nameStr) {
    const matchedDrivers = driversArr.filter(driver => nameStr.toLowerCase() === driver.toLowerCase());
    return matchedDrivers;
}

// const nameFilter = drivers.filter(namesSearched => namesSearched === drivers);

// const caseFilter = drivers.filter(namesSearched => namesSearched === drivers.toLowerCase());

// const noMatch = drivers.filter(namesSearched => namesSearched ===) 

// console.log(findMatching(nameFilter));

// fuzzyMatch:
// - return a driver if beginning provided letters match
// - does NOT return drivers if only middle or ending letters match (test1)
// - does NOT return drivers if only middle or ending letters match (test2)

function fuzzyMatch(driversArr, lettersStr){
    const matchedDrivers = driversArr.filter(driverName => driverName.charAt(0) + driverName.charAt(1) === lettersStr.charAt(0) + lettersStr.charAt(1));
    return matchedDrivers; 
}

// function fuzzyMatch(driversArr, lettersStr){
//     const matchedDrivers = driversArr.filter(driver => driver === lettersStr.toLowerCase().charAt(0) + lettersStr.toLowerCase().charAt(1))
//     return matchedDrivers; 
// }

// tried to add !== -1 to end of fuzzyMatch function above 

// function fuzzyMatch(driversArr, lettersStr){
//     const matchedDrivers = driversArr.filter(driver => driver.toLowerCase().find((lettersStr)=> lettersStr.toLowerCase().charAt(0) + lettersStr.toLowerCase.charAt(1)))
//     console.log(matchedDrivers); 
// }

// function fuzzyMatch(driversArr, lettersStr){
//     const matchedDrivers = driversArr.filter(driver => driver.toLowerCase().indexOf(lettersStr.toLowerCase()) !== -1)
//     return matchedDrivers;
// }

// console.log(fuzzyMatch(drivers, "Sa"))

// matchName:
// - accesses the data structure to check if name matches

function matchName(driversArr, nameStr){
    const matchedDrivers = driversArr.filter(driversArr => driversArr.name === nameStr);
    return matchedDrivers;

// function matchName(driversArr, nameStr){
//     const matchedDrivers = driversArr.find(driversArr => driversArr.name === nameStr);
//     return matchedDrivers;
}

// function matchName(driversArr, nameStr){
//     const matchedDrivers = driversArr.filter(driverName => driverName === nameStr);
//     let objOfMatchedDrivers = matchedDrivers
// }