const {read, write} = require("../services/fs.service");

class UserRepository {
    async getAll() {
        return read();
    }

    async create(user) {
        const users = await read()

        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: user.name,
            surname: user.surname,
            age: user.age,
        }
        users.push(newUser);
        await write(users);

        return newUser;
    }

    async getById(id) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));

        return users[index];
    }

    async patchUser(id, user) {
        const users = await read();

        const index = users.findIndex(user => user.id === Number(id));

        if (user.name !== undefined) {
            users[index].name = user.name;
        }

        if (user.surname !== undefined) {
            users[index].surname = user.surname;
        }

        if (user.age !== undefined) {
            users[index].age = user.age;
        }

        await write(users);

        return user[index];
    }

    async deleteById(id) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));

        users.splice(index, 1);
        await write(users);
        return users;
        ////////////////////////////////////////////////////
        // const users = await read();
        // const userDel = users.filter(user => user.id !== +id);
        // await write(userDel);
        // return userDel;
        ///////////////////////////////////////////
        //  const users = await read();
        // return await write(users.filter(user => user.id !== +id));
    }
}

const userRepository = new UserRepository();

module.exports = {
    userRepository,
}