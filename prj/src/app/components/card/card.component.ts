import { Component, Input, OnInit } from '@angular/core';
import IRest from 'src/app/models/restaurant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() restaurant: IRest;

  public goToRestaurant(restaurant: IRest) {
    
  }

  ngOnInit(): void {
    const restaurant: IRest = this.restaurant;
  }
}
