import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [ 
  //4200 solo es el path vacio, vacio te redirecciono al login
  //full sirve para redireccionar url con el path vacio. Sino esta usa la config prefix y genera un loop infinito de redirecciones.
  //path es la ruta que hay que poner en la barra del buscados para ir al componente vinculado:
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path:'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
