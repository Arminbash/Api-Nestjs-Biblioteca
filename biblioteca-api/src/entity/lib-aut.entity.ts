import { Entity, ManyToMany, JoinColumn } from "typeorm";
import { Autor } from "./autor.entity";
import { Libro } from "./libro.entity";

@Entity()
export class LibAut {
//@ManyToMany(type => Autor, IdLibro => Libro)
@JoinColumn({ name: "IdAutor" })
    Autor: Autor;

    @JoinColumn({ name: "IdLibro" })
    Libro: Libro;
}
