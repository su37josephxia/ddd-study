import PhoneNumber from "../entities/PhoneNumber";
import User from "../vo/User";

export default interface UserRepository {
    save(user: User): User
    find(id): User
    // find(phone: PhoneNumber): User
}

