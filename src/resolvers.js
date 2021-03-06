const Employee = require('./Employee');

module.exports = {
  Query: {
    employees: () => Employee.find(),
    employee: (_, { id }) => Employee.findById(id),
  },
  Mutation: {
    createEmployee: (_, { name, email }) => Employee.create({ name, email }),
  },
};
