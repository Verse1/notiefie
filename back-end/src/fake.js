const faker = require('faker');

function users(n) {
    let users = [];
    
    for (let i = 1; i <= n; i++){
        users.push({
            id: i,
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            createdAt: faker.date.past(),
        });
    }
    return users;
}

module.exports = {
    users
};
