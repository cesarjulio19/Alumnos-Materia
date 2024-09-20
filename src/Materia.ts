export class Materia{
// nombre de la materia
public name: string
// nota de la materia
public nota: number
static materias: Materia[] = []
// constructor de la clase
constructor(name: string, nota: number){
   this.name = name
   this.nota = nota
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

public getmaterias(){
    return Materia.materias
}



}