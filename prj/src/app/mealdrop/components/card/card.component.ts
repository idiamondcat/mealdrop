import { Component, Input } from '@angular/core';
import IRest from 'src/app/shared/models/restaurant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() restaurant: IRest;
}
