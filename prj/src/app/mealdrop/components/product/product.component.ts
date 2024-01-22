import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/restaurant';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct;
  @Input() restaurant: string;
  quantity = 0;
  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { restaurant: this.restaurant, item: this.product },
    });
  }
}
