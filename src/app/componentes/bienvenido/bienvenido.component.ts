import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  constructor(private router : Router,
    private activatedRoute : ActivatedRoute,
    private locationStrategy: LocationStrategy
    )//la instancio
  {
    this.miUsuario = new Usuario();
    this.numero1 =0;
    this.numero2 =0;
    this.suma =0;
    this.promedio =0;
    this.mensaje ='';
  }

  ngOnInit(): void {
  }

  title = 'Clase 01';

  miUsuario : Usuario; //Creo la var de tipo usuario
  numero1: number;
  numero2: number;
  suma: number;
  promedio : number;
  mensaje : string;

  //Funciones de los eventos:
  public volverLogin ()
  {
    //this.router.navigate([this.locationStrategy.getBaseHref() + 'login'])
    this.router.navigate(['login'])
  }

  mostrar()
  {
    console.info('title', this.title);
    console.log(this.miUsuario);
  }
  onClickCalcularSumaPromedio()
  {
    this.calcularPromedio();
    this.calcularSuma()
  }
  onClickLimpiarCuadros()
  {
    this.limpiarCuadrosDeTexto();
  }
  //Funciones
  private calcularPromedio()
  {
    this.promedio = ( this.numero1 + this.numero2)/2;
    
  }
  private calcularSuma()
  {
    this.suma = this.numero1 + this.numero2;
  }

  private limpiarCuadrosDeTexto() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.promedio = 0;
    this.suma = 0;
  }

 

}
