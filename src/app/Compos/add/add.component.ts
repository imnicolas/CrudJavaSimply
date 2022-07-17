import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona(0, "", "", "", "");

  constructor(private service: ServicioService, private router:Router) { }

  ngOnInit(): void {
  }

  Guardar() {
    this.service.createPersona(this.persona)
      .subscribe(data => {
        this.persona=data;
        // alert("Se Agrego con Exito...!!!");
        // window.location.reload();
        this.router.navigate(["mostrar"]);
      })
    console.log(this.persona);
  }

}
