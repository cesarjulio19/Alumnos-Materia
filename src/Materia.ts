export class Materia{
public name: string
public nota: number

constructor(name: string, nota: number){
   this.name = name
   this.nota = nota
}

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



}