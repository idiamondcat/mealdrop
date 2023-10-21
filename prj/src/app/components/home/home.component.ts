import { Component } from '@angular/core';
import IRest from 'src/app/models/restaurant';
import ICategory from 'src/app/models/category';
import restaurants from 'src/app/data/restaurants';
import categories from 'src/app/data/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  favouriteRestaurants: IRest[] = restaurants.filter(elem => elem.rating.rate !== null && elem.rating.rate >= 4.5);
  newRestaurants: IRest[] = restaurants.filter(elem => elem.isNew === true);
  categories: ICategory[] = categories;
  constructor() {
    this.categories = [...categories];
    this.categories.map(elem => elem.round = true);
  }
}
