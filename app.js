const yargs = require('yargs')
const data01 = require('./data01')

yargs.command({
    command: "add",
    describe: "using to add new data",
    builder: {
        id: {
            describe: "This is person's id",
            demandOptions: true,
            type: "integer"
        },
        fName: {
            describe: "This is person's first name",
            demandOptions: true,
            type: "string"
        },
        lName: {
            describe: "This is person's last name",
            demandOptions: true,
            type: "string"
        },
        age: {
            describe: "This is person's age",
            type: "integer"
        },
        city: {
            describe: "This is person's city",
            type: "string"
        }
    },
    handler: (x) => {
        data01.addPerson(x.id, x.fName, x.lName, x.age, x.city);
    }
})

yargs.command({
    command: "viewOne",
    describe: "using to view specific person saved in data",
    builder: {
        id: {
            describe: "This is person's id",
            demandOptions: true,
            type: "integer"
        }
    },
    handler: (x) => {
        data01.viewOnePerson(x.id);
    }
})

yargs.command({
    command: "viewAll",
    describe: "using to view all saved data",
    handler: () => {
        data01.viewAllPersons();
    }
})

yargs.command({
    command: "deleteOne",
    describe: "using to delete specific person saved in data",
    builder: {
        id: {
            describe: "This is person's id",
            demandOptions: true,
            type: "integer"
        }
    },
    handler: (x) => {
        data01.deleteOnePerson(x.id);
    }
})

yargs.command({
    command: "deleteAll",
    describe: "using to delete all saved data",
    handler: () => {
        data01.deleteAllPersons();
    }
})

yargs.parse()