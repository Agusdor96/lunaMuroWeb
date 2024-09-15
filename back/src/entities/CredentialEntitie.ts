import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({
    name: "credentials"
})
export class Credentials{
    @PrimaryGeneratedColumn()
        id: number
    @Column()
        username: string
    @Column()
        password: string
    @Column({default:false})
        login: boolean
    
    @OneToOne(() => User, (user) => user.credentialId)
        user: User
}