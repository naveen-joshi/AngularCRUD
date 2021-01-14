import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  accountType: string = '';
  constructor() {}

  setvalue(value) {
    this.accountType = value;
  }

  ngOnInit(): void {}
}
