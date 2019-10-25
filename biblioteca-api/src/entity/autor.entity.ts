import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Autor {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({length: 250})
    Nombre: string;

    @Column({length: 250})
    Nacionalidad: string;

    @Column()
    Estado: boolean;
}
