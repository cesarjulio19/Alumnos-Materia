import {Materia} from "./Materia"
export class Alumnos {
    private name: string
    private materias: Materia[]
    

    constructor(name: string, materias: Materia[] = []) {
        this.name = name;
        this.materias = materias;
        
    }

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