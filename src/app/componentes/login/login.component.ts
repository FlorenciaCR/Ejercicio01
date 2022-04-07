import { LocationStrategy } from '@angular/common';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { Usuarios } from 'src/app/mock/usuarios-mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarios : Usuario []=[];
  miUsuario : Usuario = new Usuario();

  constructor(
    private router : Router){ 
    this.usuarios = Usuarios;
  }
  // private activatedRoute : ActivatedRoute,
  // private locationStrategy: LocationStrategy
   //router cambia de componentes
   //ActivatedRoute obtiene la ruta ACTUAL. 
   //En router.navigate, el primer parametro es a que url me quiero dirigir (para poder dirigirme a dicha url esta url tiene que tener vinculado un componente en la clase )
   //relativeTo = es un atributo que se le pasa como 2do param a router.navigate en el cual le tenemos que pasar
   //una ruta o string y al final de esta ruta se le suma el primer parametro de la funcion router.navigate.
   //Agregue locationStrategy para obtener la url base (localhost:4200/) con la funcion getBaseHref

  invitado()
  {
    this.miUsuario.nombre = 'Invitado';
    this.miUsuario.clave = '123';
  }

  onSubmit()
  {
    if(this.validarUsuario())
    {
      //this.router.navigate([this.locationStrategy.getBaseHref() +'bienvenido']);
      this.router.navigate(['bienvenido']);
    }else{
      //this.router.navigate(['error'], { relativeTo: this.activatedRoute}); No puedo hacer esto porque seria login/error y no existe.
      //this.router.navigate([this.locationStrategy.getBaseHref() +'error']);
      this.router.navigate(['error']);
    }
  }

 validarUsuario(){
  let retorno : boolean = false;
  this.usuarios.forEach(usuario => {
    if(this.miUsuario.nombre == usuario.nombre && this.miUsuario.clave == this.miUsuario.clave)
    {
      retorno = true;
    }
  });
  return retorno;
 }

  ngOnInit(): void {
  }

}
