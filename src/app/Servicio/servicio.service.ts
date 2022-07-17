import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }


  Url='http://localhost:8080/personas';
  URL='https://gassye.herokuapp.com/personas';

  getPersona(){
    return this.http.get<Persona[]>(this.Url+'/traer');
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+'/crear',persona);
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/editar/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/borrar/"+persona.id);
  }
  
}
