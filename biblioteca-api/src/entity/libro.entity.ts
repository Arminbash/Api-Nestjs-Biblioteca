import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    Id:number;

    @Column({length:50})
    Titulo: string;

    @Column({length:50})
    Editorial: string;

    @Column({length:50})
    Area: string;

    @Column()
    Estado: boolean;
}
