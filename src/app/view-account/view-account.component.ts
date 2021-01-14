import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css'],
})
export class ViewAccountComponent implements OnInit {
  accountno: String;
  check = true;

  constructor() {}

  validate() {
    console.log(this.accountno);
    if (this.accountno.startsWith('1') || this.accountno.startsWith('2')) {
      this.check = false;
    } else {
      this.check = true;
    }
  }
  ngOnInit(): void {}
}
