import { Component } from '@angular/core';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrls: ['./order-successful.component.scss'],
})
export class OrderSuccessfulComponent {
  currTime: number = new Date().getTime();
  newtime: Date = new Date(this.currTime + 60 * 60 * 1000);
}
