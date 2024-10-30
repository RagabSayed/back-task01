const fs = require('fs');

// Add New Person
const addPerson = (id, fName, lName, age, city) => {
    const dataSaved = loadData();
    const findId = dataSaved.find(fd => fd.id === id);
    if (findId) {
        console.log('This ID already Exist, Please check data that you have entered');
    } else {
        dataSaved.push({
            id,
            fName,
            lName,
            age,
            city
        })
        saveData(dataSaved);
        console.log("Data has saved successfully");
    }
}

// View one person
const viewOnePerson = (id) => {
    const dataSaved = loadData();
    const findPerson = dataSaved.find(fd => fd.id === id);
    if (findPerson) {
        console.table(findPerson)
    } else {
        console.log('This ID is not Exist, Please check data that you have entered');
    }
}

// View all persons
const viewAllPersons = () => {
    const dataSaved = loadData();
    if (dataSaved.length > 0) {
        console.table(dataSaved)
    } else {
        console.log('There is no data saved to view it');
    }
}

// Delete one person
const deleteOnePerson = (id) => {
    const dataSaved = loadData();
    const remindData = dataSaved.filter(fl => fl.id !== id);
    if (remindData.length < dataSaved.length) {
        saveData(remindData);
        console.log(`The person who has an ID: ${id} has deleted successfully`);
    } else {
        console.log('This ID is not Exist, Please check data that you have entered');
    }
}

// Delete all persons
const deleteAllPersons = () => {
    const dataSaved = loadData();
    if (dataSaved.length > 0) {
        saveData([]);
        console.log("All persons's data deleted successfully");
    } else {
        console.log('There is no data saved to delete it');
    }
}

// Call Data
const loadData = () => {
    try {
        const dataJson = fs.readFileSync('data01.json').toString()
        return JSON.parse(dataJson);
    } catch  {
        return []
    }
}

// Save Data
const saveData = (allData) => {
    const jsonData = JSON.stringify(allData)
    fs.writeFileSync('data01.json', jsonData)
}

module.exports = {
    addPerson,
    viewOnePerson,
    viewAllPersons,
    deleteOnePerson,
    deleteAllPersons
}