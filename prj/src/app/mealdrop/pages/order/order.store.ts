import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface IOrderComponentState {
  step: number;
}
@Injectable()
export class OrderStore extends ComponentStore<IOrderComponentState> {
  private step$: Observable<number> = this.select(state => state.step);
  vm$ = this.select({
    step: this.step$,
  });
  changeStep = this.updater((state, payload: number) => ({
    ...state,
    step: payload,
  }));
  constructor() {
    super({
      step: 1,
    });
  }
}
