import { Component, DestroyRef, Inject, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IOrder } from '../../../redux/redux.models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { updateProduct } from '../../../redux/actions/cart.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { selectItems } from '../../../redux/selectors/cart.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  total = 0;
  quantity: number[] = Array(11)
    .fill(0)
    .map((num, i) => i);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IOrder[],
    private store: Store
  ) {}
  ngOnInit(): void {
    this.store
      .select(selectItems)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        if (res) {
          this.data = res;
          this.total = this.data.reduce(
            (prev, next) => (prev = prev + next.item.price * next.count),
            0
          );
        }
      });
  }

  public changeCount(id: number, count: string) {
    this.store.dispatch(updateProduct({ payload: { id: id, count: Number(count) } }))
  }
}
