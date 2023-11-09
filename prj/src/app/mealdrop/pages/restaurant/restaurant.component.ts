import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../shared/data/db.json';
import IRest from '../../../shared/models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  id: number;
  restaurant: IRest | undefined;
  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => (this.id = params['id']));
    this.restaurant = data.restaurants.find(
      elem => elem.id === Number(this.id)
    );
  }
}
