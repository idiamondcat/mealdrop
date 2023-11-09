import { Pipe, PipeTransform } from '@angular/core';
import ICategory from '../models/category';

@Pipe({
  name: 'toSquare',
})
export class ToSquarePipe implements PipeTransform {
  transform(categories: ICategory[]): ICategory[] {
    const changedCategory: ICategory[] = [...categories];
    changedCategory.map(elem => (elem.round = false));
    return changedCategory;
  }
}
