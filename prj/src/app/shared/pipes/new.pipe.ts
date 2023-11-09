import { Pipe, PipeTransform } from '@angular/core';
import IRest from '../../shared/models/restaurant';

@Pipe({
  name: 'new',
})
export class NewPipe implements PipeTransform {
  transform(restaurants: IRest[]): IRest[] {
    return restaurants.filter(elem => elem.isNew === true);
  }
}
