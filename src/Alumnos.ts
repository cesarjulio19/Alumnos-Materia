import {Materia} from "./Materia"
export class Alumnos {
    private name: string
    private id: number
    

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        
    }

    public getname(){
        return this.name
    }
    
    public getid(){
        return this.id
    }
    
    public setname(name: string){
       this.name = name
    }
    
    public setid(id: number){
        this.id = id
    }

    public matriz: string[][] = [];

    addMateria(materia: Materia, nota: string){
        //this.matriz.push[materia][nota]
    }


    
}