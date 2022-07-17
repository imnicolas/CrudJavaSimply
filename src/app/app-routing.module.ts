import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Compos/add/add.component';
import { EditComponent } from './Compos/edit/edit.component';
import { ListarComponent } from './Compos/listar/listar.component';
import { LoginComponent } from './Compos/login/login.component';
import { MainComponent } from './Compos/main/main.component';
import { SelectoresComponent } from './Compos/selectores/selectores.component';
import { PersonaGuardService as guard } from './guards/persona-guard.service'

const routes: Routes = [
  {path:'',component:SelectoresComponent},
  {path:'add', component : AddComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'mostrar',component: ListarComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'edit',component: EditComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'main', component: SelectoresComponent},
  {path:'login',component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
