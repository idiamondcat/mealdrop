import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IOrder } from 'src/app/redux/redux.models';
import { MatDialog } from '@angular/material/dialog';
import { SidebarComponent } from 'src/app/mealdrop/components/sidebar/sidebar.component';
import { StoreFacadeService } from '../../../redux/store-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  orders: IOrder[];
  sum: Observable<number>;
  destroyRef = inject(DestroyRef);
  constructor(
    private facade: StoreFacadeService,
    public sidebar: MatDialog
  ) {}

  ngOnInit(): void {
      this.facade.order$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        if (res) {
          this.orders = res;
        }
      });
      this.sum = this.facade.total$;
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
