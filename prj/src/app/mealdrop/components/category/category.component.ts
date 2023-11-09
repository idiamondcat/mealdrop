import { Component, Input } from '@angular/core';
import ICategory from 'src/app/shared/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category: ICategory;
}
