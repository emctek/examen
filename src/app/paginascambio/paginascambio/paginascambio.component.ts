import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paginascambio',
  templateUrl: './paginascambio.component.html',
  styleUrls: ['./paginascambio.component.scss'],
})
export class PaginascambioComponent implements OnInit {
  constructor(private route: Router) {}
  aspirantes() {
    this.route.navigate(['/aspirantes']);
  }
  alumnos() {
    this.route.navigate(['/alumnos']);
  }
  docentes() {
    this.route.navigate(['/docentes']);
  }
  exalumnos() {
    this.route.navigate(['/exalumnos']);
  }
  padresfamilia() {
    this.route.navigate(['/padresfamilia']);
  }
  empresas() {
    this.route.navigate(['/empresas']);
  }
  ngOnInit() {}

}
