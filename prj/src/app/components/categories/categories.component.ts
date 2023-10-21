import { Component } from '@angular/core';
import categories from 'src/app/data/categories';
import ICategory from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: ICategory[];
  constructor() {
    this.categories = [...categories];
    this.categories.map(elem => elem.round = false);
  }
}
