import PhoneNumber from "./PhoneNumber"
import SalesRepRepository from "../repositories/SalesRepRepository";
import SalesRep from "../vo/SalesRep";

export default class User {
    private userId: string
    private phone: PhoneNumber
    private salesRepId: string
    private fresh: boolean

    // repository
    private salesRepRepository: SalesRepRepository

    constructor(name, phone: PhoneNumber) {
        // 参数校验

        // 查询
        const salesRep: SalesRep = this.salesRepRepository.find(phone)
        this.salesRepId = salesRep.getRepId()
    }

    setFresh() {
        this.fresh = true
    }



}