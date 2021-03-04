const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('user', [
      {
        login: 'admin',
        password: '$2a$10$cmehrpM2Kbm8dmyqwDdw7eKS4oO.pLX3muI1ToLJSs97lu93l6x5C',
        email: 'newnewqwes@gmail.com',
        phone: '375333637970',
        city: 'Гродно',
        street: 'Лермонтова',
        home: '29',
        apartment: '1',
        type: process.env.ADMIN_ROLE,
      },
    ]),

  down: queryInterface => queryInterface.bulkDelete('user', null, {}),
};
