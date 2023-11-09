import { Pipe, PipeTransform } from '@angular/core';
import IRest from '../../shared/models/restaurant';

@Pipe({
  name: 'favourite',
})
export class FavouritePipe implements PipeTransform {
  transform(restaurants: IRest[]): IRest[] {
    return restaurants.filter(
      elem => elem.rating.rate && elem.rating.rate >= 4.5
    );
  }
}
