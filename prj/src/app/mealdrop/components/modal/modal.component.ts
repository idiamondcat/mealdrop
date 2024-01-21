import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreFacadeService } from '../../../redux/store-facade.service';
import { IItem } from 'src/app/shared/models/item';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  count = 1;
  min = 1;
  max = 10;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IItem,
    private facade: StoreFacadeService
  ) {}

  public changeCount(prefix: string): void {
    switch (prefix) {
      case 'inc':
        if (this.count < this.max) {
          this.count++;
        }
        break;
      case 'dec':
        if (this.count > this.min) {
          this.count--;
        }
        break;
    }
  }

  public addItem() {
    this.facade.addNewProduct(this.data.restaurant, this.data.item, this.count);
  }
}
