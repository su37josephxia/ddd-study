import PhoneNumber from "../dp/PhoneNumber";
import User from "../dp/User";

export default interface UserRepository {
    save(user: User): User
    find(id): User
    // find(phone: PhoneNumber): User
}

