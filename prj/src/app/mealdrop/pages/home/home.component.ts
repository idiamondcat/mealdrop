import { Component } from '@angular/core';
import data from '../../../shared/data/db.json';
import IRest from '../../../shared/models/restaurant';
import ICategory from '../../../shared/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  restaurants: IRest[] = data.restaurants;
  categories: ICategory[] = data.categories;
  constructor() {
    // this.categories = [...categories];
    // this.categories.map(elem => elem.round = true);
  }
}
