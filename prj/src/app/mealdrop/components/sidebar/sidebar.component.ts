import { Component, DestroyRef, Inject, OnInit, inject } from '@angular/core';
import { IOrder } from '../../../redux/redux.models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StoreFacadeService } from '../../../redux/store-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  total: Observable<number>;
  quantity: number[] = Array(11)
    .fill(0)
    .map((num, i) => i);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IOrder[],
    private facade: StoreFacadeService
  ) {}
  ngOnInit(): void {
    this.facade.order$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        if (res) {
          this.data = res;
        }
      });
    this.total = this.facade.total$;
  }

  public changeCount(id: number, count: string) {
    this.facade.updateProduct(id, Number(count));
  }
}
