import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credentials } from "./CredentialEntitie"
import { Appointment } from "./AppointmentEntitie"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
    length: 100
    })
    name: string
    
    @Column()
    email: string
    
    @Column()
    birthdate: string
    
    @Column("integer")
    nDni: number
    
    @OneToOne(() => Credentials, (credential) => credential.user)
    @JoinColumn()
    credentialId  : Credentials

    @OneToMany(() => Appointment, (appointment => appointment.user))
    appointment: Appointment
}