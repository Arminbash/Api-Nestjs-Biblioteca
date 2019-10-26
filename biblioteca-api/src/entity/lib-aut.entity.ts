import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Autor } from "./autor.entity";
import { Libro } from "./libro.entity";

@Entity()
export class LibAut {
    @PrimaryGeneratedColumn()
    Id: number;
//@ManyToMany(type => Autor, IdLibro => Libro)
    //@JoinColumn({ name: "IdAutor" })
    //Autor: Autor;

    //@JoinColumn({ name: "IdLibro" })
    //Libro: Libro;

    @ManyToOne((type) => Autor)
    autor: Autor;

    @ManyToOne((type) => Libro)
    libro: Libro;
}
