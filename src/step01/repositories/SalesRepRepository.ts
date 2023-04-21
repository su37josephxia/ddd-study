import PhoneNumber from "../dp/PhoneNumber";
import SalesRep from "../entities/SalesRep";


export default class SalesRepRepository {

    findRepo(phone: PhoneNumber) {
        phone.getAreaCode()
        phone.getOperatorCode()


        return new SalesRep()
    }
}