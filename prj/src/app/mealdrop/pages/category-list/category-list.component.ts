import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../shared/data/db.json';
import IRest from 'src/app/shared/models/restaurant';
import ICategory from 'src/app/shared/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  name: string;
  category: ICategory | undefined;
  restaurants: IRest[];
  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => (this.name = params['name']));
    this.category = data.categories.find(elem => elem.title.toLocaleLowerCase() === this.name);
    this.restaurants = data.restaurants.filter(elem => elem.category.includes(this.name.toLowerCase()));
  }
}
