import { Component } from '@angular/core';
import { StoreFacadeService } from '../../../redux/store-facade.service';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/redux/redux.models';
import { OrderStore } from './order.store';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderStore],
})
export class OrderComponent {
  order: Observable<IOrder[]>;
  restaurant: Observable<string>;
  total: Observable<number>;
  vm$;
  constructor(
    private facade: StoreFacadeService,
    private orderStore: OrderStore
  ) {
    this.vm$ = this.orderStore.vm$;
    this.order = this.facade.order$;
    this.restaurant = this.facade.restaurant$;
    this.total = this.facade.total$;
  }

  goToAnotherStep(currStep: number) {
    this.orderStore.changeStep(currStep);
  }
}
