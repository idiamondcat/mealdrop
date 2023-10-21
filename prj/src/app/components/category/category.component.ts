import { Component, Input, OnInit } from '@angular/core';
import ICategory from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: ICategory;
  constructor() {}

  ngOnInit(): void {
    const category: ICategory = this.category;
  }

}
