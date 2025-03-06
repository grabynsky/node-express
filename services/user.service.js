const {userRepository} = require("../repositories/user.repository");

class UserService {
    async getAll() {
        return await userRepository.getAll()
    }

    async create(user) {
        return await userRepository.create(user)
    }

    async getById(id) {
        return await userRepository.getById(id);
    }

    async patchUser(id, user) {

        return userRepository.patchUser(id, user)
    }

    async deleteById(id) {
        return await userRepository.deleteById(id);
    }


}

const userService = new UserService();

module.exports = {
    userService
}