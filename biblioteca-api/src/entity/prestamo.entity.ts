import { Entity, JoinColumn, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Estudiante } from "./estudiante.entity";
import { join } from "path";
import { Libro } from "./libro.entity";

@Entity()
export class Prestamo {
    @PrimaryGeneratedColumn()
    Id: number;

    //@JoinColumn({name : "IdLector"})
    //Estudiante: Estudiante;

    //@JoinColumn({name: "IdLibro"})
    //Libro: Libro;

    @ManyToOne((type) => Estudiante)
    estudiante: Estudiante;

    @ManyToOne((type) => Libro)
    libro: Libro;

    @CreateDateColumn()
    FechaPrestamo : Date;

    @Column()
    FechaDevolucion: Date;

    @Column()
    Devuelto: boolean;
}
