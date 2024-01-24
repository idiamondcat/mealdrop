import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/redux/redux.models';
import { StoreFacadeService } from 'src/app/redux/store-facade.service';

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.scss'],
})
export class OrderBlockComponent {
  order: Observable<IOrder[]>;
  total: Observable<number>;
  constructor(private facade: StoreFacadeService) {
    this.order = this.facade.order$;
    this.total = this.facade.total$;
  }
}
