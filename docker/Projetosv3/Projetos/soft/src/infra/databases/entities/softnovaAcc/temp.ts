import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Temp {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    email!: string
}
