import { Component, DestroyRef, Inject, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IOrder } from 'src/app/redux/redux.models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  destroyRef = inject(DestroyRef);
  quantity: number[] = Array(11)
    .fill(0)
    .map((num, i) => i);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IOrder[],
    private store: Store
  ) {}

  public changeCount(id: number, count: string) {
    // console.log((count.target as HTMLSelectElement).value);
  }
}
