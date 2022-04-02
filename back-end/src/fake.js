const faker = require('faker');

function users(n) {
  const users = [];

  for (let i = 1; i <= n; i++) {
    users.push({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      university: faker.address.cityName() + ' University',
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: faker.date.past(),
    });
  }
  users.push({
    id: '2005b873-dd55-4ebe-8165-76ce6d9b83a6',
    name: 'Test',
    university: 'Test University',
    email: 'test@test.com',
    password: 'test',
    createdAt: '2019-01-01T00:00:00.000Z',
  });
  return users;
}

function classes(n) {
    const classes = [];
  
    for (let i = 1; i <= n; i++) {
      classes.push({
        id: faker.datatype.uuid(),
        name: faker.lorem.words() + '101',
        classCode: faker.random.word() + '-101',
        university: faker.address.cityName() + ' University',
        createdAt: faker.date.past(),
      });
    }
    classes.push({
      id: '621522b8-22b7-4634-befc-0a5785f53d3d',
      name: 'Test Class 101',
      classCode: 'Test-101',
      university: 'Test University',
      createdAt: '2019-01-01T00:00:00.000Z',
    });
    return classes;
  }

module.exports = {
  users,
  classes,
};
