import { Component } from '@angular/core';
import data from '../../../shared/data/db.json';
import ICategory from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: ICategory[] = data.categories;
}
