import {Materia} from "./Materia"
export class Alumnos {
    //nombre del alumno
    private name: string
    //lista de materias del alumno con su nota
    private materias: Materia[]
    
    //constructor de la clase
    constructor(name: string, materias: Materia[] = []) {
        this.name = name;
        this.materias = materias;
        
    }
    // funciones get, set y añadir materia
    public getname(){
        return this.name
    }
    
    public getmaterias(){
        return this.materias
    }
    
    public setname(name: string){
       this.name = name
    }
    

    addMateria(materia: Materia){
        this.materias.push(materia)
    }


    
}