import { Component } from '@angular/core';
import { StoreFacadeService } from '../../../redux/store-facade.service';
import { Observable } from 'rxjs';
import { OrderStore } from './order.store';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderStore],
})
export class OrderComponent {
  restaurant: Observable<string>;
  vm$;
  constructor(
    private facade: StoreFacadeService,
    private orderStore: OrderStore
  ) {
    this.vm$ = this.orderStore.vm$;
    this.restaurant = this.facade.restaurant$;
  }

  goToAnotherStep(currStep: number) {
    this.orderStore.changeStep(currStep);
  }
}
