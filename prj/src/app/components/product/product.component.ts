import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/restaurant';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const product = this.product;
  }

  public openDialog(): void {
    const {name, description, price } = this.product;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { name: name, description: description, price: price }
    });
  }
}
