import {Materia} from "./Materia"
import {MateriaInterface} from "./MateriaInterface"
export class Alumnos {
    //nombre del alumno
    private name: string
    //lista de materias del alumno con su nota
    private materias: MateriaInterface[]
    //private materias: Materia[]
    // id alumno
    private id: number
    //propiedad estatica que es un array de todos los alumnos creados
    static alumnos: Alumnos[] = []
    //constructor de la clase
    constructor(name: string,id: number, /*materias: Materia[] = [],*/materias: MateriaInterface[] = []) {
        this.name = name;
        this.materias = materias;
        this.id = id
    }
    // funciones get, set y añadir materia
    public getname(){
        return this.name
    }
    
    public getmaterias(){
        return this.materias
    }

    public getid(){
        return this.id
    }
    
    public setname(name: string){
       this.name = name
    }

    static getalumnos(){
        return Alumnos.alumnos
    }
    
    // metodo para añadir una materia al alumno
    public addMateria(/*materia: Materia*/ materia: MateriaInterface){
        this.materias.push(materia)
    }
    // metodo para cambiar la nota a la materia seleccionada
    public changenota(materian: string, nota: number){
        /*for(let materia of this.materias){
            if(materia.getname() === materian){
                materia.setnota(nota)
            }
        }*/

            for(let materia of this.materias){
                if(materia.name === materian){
                    materia.nota = nota
                }
            }
       
    }
    // metodo estatico para añadir alumno al array de alumnos de la clase
    static addalumno(alumno:Alumnos){
        Alumnos.alumnos.push(alumno)
    }


    
}