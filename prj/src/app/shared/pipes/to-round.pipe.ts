import { Pipe, PipeTransform } from '@angular/core';
import ICategory from '../models/category';

@Pipe({
  name: 'toRound',
})
export class ToRoundPipe implements PipeTransform {
  transform(categories: ICategory[]): ICategory[] {
    const changedCategory: ICategory[] = [...categories];
    changedCategory.map(elem => (elem.round = true));
    return changedCategory;
  }
}
