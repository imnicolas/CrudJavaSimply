import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Servicio/servicio.service';
import { TokenService } from 'src/app/Servicio/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isLogged = false;

  constructor(private route: Router, private service: ServicioService, private tokenService: TokenService) { }

  ngOnInit(): void {if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }


  Mostrar(){
    this.route.navigate(['mostrar']);
  }

  Agregar(){
    this.route.navigate(['add']);
  }

  login(){
    this.route.navigate(['login'])
  }
}

