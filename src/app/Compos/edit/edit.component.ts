import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona: Persona = new Persona(0, "", "", "", "");

  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit(): void {
    this.Editar();
  }


  Cancel() {
    this.router.navigate(['cancelar'])
  }

  
  Editar() {
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  Actualizar(persona: Persona) {
    this.service.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(['mostrar']);
      })
  }
}
