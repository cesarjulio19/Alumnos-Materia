export class Materia{
// nombre de la materia
private  name: string
// nota de la materia
private nota: number
//id de la materia
private id: number
static materias: string[] = []
// constructor de la clase
constructor(name: string, nota: number, id: number){
   this.name = name
   this.nota = nota
   this.id = id
}
// funciones get y set
public getname(){
    return this.name
}

public getnota(){
    return this.nota
}

public setname(name: string){
   this.name = name
}

public setnota(nota: number){
    this.nota = nota
}

public getid(){
    return this.getid
}
// función estatica para mostrar todas las materias
static getmaterias(){
    return Materia.materias
}
// funcion estática para añadir el nombre de la materia al array
static insertmateria(name: string){
    if(!Materia.materias.includes(name)){
        Materia.materias.push(name)
    }
}



}