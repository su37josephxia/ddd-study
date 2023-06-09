
import SalesRep from "./entities/SalesRep";
import User from "./entities/User";
import SalesRepRepository from "./repositories/SalesRepRepository";
import { UserRepository } from "../repositories/UserRepository";
import PhoneNumber from "./dp/PhoneNumber.vo";


export default class RegistrationService {

    // 用户资源
    private salesRepo: SalesRepRepository;
    private userRepo: UserRepository;

    public register(name: string, phone: PhoneNumber): User {
        if (name === null || name.length === 0) {
            throw new Error()
        }

        // 省略
        // if (phone === null || !this.isValidPhoneNumber(phone)) {
        //     throw new Error()
        // }

        // 获取手机号归属地和运营商编号
        // 通过编号查找区域内的SalesRepo
        // 重构为phone 内部逻辑
        // const areaCode = this.getAreaCode(phone)
        // const operatorCode = this.getOperatorCode(phone)
        const rep: SalesRep = this.salesRepo.findRepo(phone)

        // 创建用户，落盘
        const user: User = new User()
        user.name = name
        user.phone = phone

        if (rep !== null) {
            user.repId = rep.repId
        }


        return this.userRepo.save(user)
    }

    // 重构到PhoneNumber
    // private isValidPhoneNumber(phone: string): boolean {
    //     const pattern = /^0[1-9]{2,3}-?\\d{8}/
    //     return pattern.test(phone)
    // }

    // 重构到PhoneNumber
    // private getAreaCode(phone) {
    // }

    // 重构到PhoneNumber
    // private getOperatorCode(phone) {
    // }




}

