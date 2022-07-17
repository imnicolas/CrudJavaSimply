export class Persona {
    id:number;
    nombre: String;
    cuit: String;
    contacto: String;
    cbu: String;

    constructor(id:number,nombre:String,cuit:String,contacto:String,cbu:String){
        this.id=id;
        this.nombre=nombre;
        this.cuit=cuit;
        this.contacto=contacto;
        this.cbu=cbu;
    }
}