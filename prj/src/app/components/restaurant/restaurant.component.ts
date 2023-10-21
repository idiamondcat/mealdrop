import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import restaurants from 'src/app/data/restaurants';
import IRest from 'src/app/models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  id: number;
  restaurant: IRest | undefined;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.restaurant = restaurants.find(elem => elem.id === Number(this.id));
  }
}
