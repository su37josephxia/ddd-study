import PhoneNumber from "../dp/PhoneNumber";
import SalesRep from "../vo/SalesRep";


export default class SalesRepRepository {

    findRepo(areaCode, operatorCode) {
        return new SalesRep()
    }

    find(phone: PhoneNumber) {
        return new SalesRep()
    }
}