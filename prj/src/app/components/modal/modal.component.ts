import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IProduct } from 'src/app/models/restaurant';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  // standalone: true,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    public changeCount(prefix: string): void {
      const input: HTMLInputElement | null = document.querySelector('.modal__count-field');
      if (input) {
        let inputVal: number = Number(input.value);
        switch(prefix) {
          case 'inc': let maxVal: number = Number(input.max);
            if (inputVal < maxVal) {
              input.value = String(inputVal + 1);
            }
            break;
          case 'dec': let minVal: number = Number(input.min);
            if (inputVal > minVal) {
              input.value = String(inputVal - 1);
            }
            break;
        }
      }
    }

    public addToCart() {}
}
