
import PhoneNumber from "../dp/PhoneNumber.vo";
import User from "../dp/User.entity";
import UserRepository from "./UserRepository";


export default class UserRepositoryImpl implements UserRepository {
    // private userDao

    save(user: User): User {
        // 具体数据库实现

        return user
    }

    findById(id): User {
        // 具体数据库实现

        return new User('', new PhoneNumber(''))
    }

    findByPhoneNumber(phone: PhoneNumber): User {
        return new User('', new PhoneNumber(''))
    }
}