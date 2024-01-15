import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItems } from 'src/app/redux/selectors/cart.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IOrder } from 'src/app/redux/redux.models';
import { MatDialog } from '@angular/material/dialog';
import { SidebarComponent } from 'src/app/mealdrop/components/sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  orders: IOrder[];
  sum = 0;
  destroyRef = inject(DestroyRef);
  constructor(
    private store: Store,
    public sidebar: MatDialog
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectItems)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        if (res) {
          this.orders = res;
          this.sum = this.orders.reduce(
            (prev, next) => (prev = prev + next.item.price * next.count),
            0
          );
        }
      });
  }

  openOrder() {
    const dialogRef = this.sidebar.open(SidebarComponent, {
      width: '420px',
      height: '100vh',
      position: { right: '0px', top: '0px' },
      panelClass: 'custom-container',
      data: this.orders,
    });
  }
}
