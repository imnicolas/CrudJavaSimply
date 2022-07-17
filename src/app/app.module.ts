import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Compos/add/add.component';
import { EditComponent } from './Compos/edit/edit.component';
import { ListarComponent } from './Compos/listar/listar.component';
import { ServicioService } from './Servicio/servicio.service';
import { MainComponent } from './Compos/main/main.component'
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProvider } from './interceptors/persona-interceptor.service';
import { AuthService } from './Servicio/auth.service';
import { TokenService } from './Servicio/token.service';
import { LoginComponent } from './Compos/login/login.component';
import { RegistroComponent } from './Compos/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListarComponent,
    MainComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ServicioService,AuthService,TokenService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
