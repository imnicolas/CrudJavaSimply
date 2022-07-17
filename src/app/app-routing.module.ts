import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Compos/add/add.component';
import { EditComponent } from './Compos/edit/edit.component';
import { ListarComponent } from './Compos/listar/listar.component';
import { MainComponent } from './Compos/main/main.component';

const routes: Routes = [
  {path:'add', component : AddComponent},
  {path:'mostrar',component: ListarComponent},
  {path:'edit',component: EditComponent},
  {path:'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
