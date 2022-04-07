import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  mensajeError : string='Error, datos incorrectos.';
  constructor(private router : Router,
    private activatedRoute : ActivatedRoute,
    private locationStrategy: LocationStrategy) { }

  ngOnInit(): void {
  }

  volverLogin()
  {
    //getBaseHref = localhost:4200/
    //this.router.navigate([this.locationStrategy.getBaseHref() +'login']);
    this.router.navigate(['login']);
  }



}
