
import PhoneNumber from "../dp/PhoneNumber";
import User from "../dp/User";
import UserRepository from "./UserRepository";


export default class UserRepositoryImpl implements UserRepository {
    // private userDao

    save(user: User): User {
        // 具体数据库实现

        return user
    }

    find(id): User {
        // 具体数据库实现

        return num
    }

    // find(phone: PhoneNumber): User {
    //     return new User()
    // }
}