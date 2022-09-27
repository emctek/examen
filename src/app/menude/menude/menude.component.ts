import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menude',
  templateUrl: './menude.component.html',
  styleUrls: ['./menude.component.scss'],
})
export class MenudeComponent implements OnInit {

  constructor(private route: Router) {}


  cal() {
    this.route.navigate(['/candendario']);
  }

  ngOnInit() {}

}
