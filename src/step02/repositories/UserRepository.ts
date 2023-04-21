import PhoneNumber from "../dp/PhoneNumber.vo";
import User from "../dp/User.entity";

export default interface UserRepository {
    save(user: User): User
    findById(id): User
    findByPhoneNumber(phone: PhoneNumber): User
}

