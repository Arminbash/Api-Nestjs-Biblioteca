import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Estudiante {
     @PrimaryGeneratedColumn()
     Id: number;

     @Column({length: 20})
     CI: string;

     @Column({length:250,unique : true})
     Nombre: string;

     @Column({length:250})
     Direccion: string;

     @Column({length:50})
     Carrera: string;

     @Column('int')
     Edad: number;

     @Column()
     Estado: boolean;
}
