import PhoneNumber from "../dp/PhoneNumber.vo";
import SalesRep from "../dp/SalesRep.entity";


export default class SalesRepRepository {

    findRepo(phone: PhoneNumber) {
        // 具体数据库实现
        return new SalesRep()
    }

    find(phone: PhoneNumber) {
        // 具体数据库实现
        return new SalesRep()
    }
}