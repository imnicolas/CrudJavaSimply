import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: Router, private service: ServicioService) { }

  ngOnInit(): void {
  }



  Mostrar(){
    this.route.navigate(['mostrar']);
  }

  Agregar(){
    this.route.navigate(['add']);
  }

}

