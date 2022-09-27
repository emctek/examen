import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuiz',
  templateUrl: './menuiz.component.html',
  styleUrls: ['./menuiz.component.scss'],
})
export class MenuizComponent implements OnInit {

  constructor(private route: Router) {}




  docentes() {
    this.route.navigate(['/docentes']);
  }

  ngOnInit() {}

}
