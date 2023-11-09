import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  public changeCount(prefix: string): void {
    const input: HTMLInputElement | null = document.querySelector(
      '.modal__count-field'
    );
    if (input) {
      const inputVal = Number(input.value);
      switch (prefix) {
        case 'inc':
          const maxVal = Number(input.max);
          if (inputVal < maxVal) {
            input.value = String(inputVal + 1);
          }
          break;
        case 'dec':
          const minVal = Number(input.min);
          if (inputVal > minVal) {
            input.value = String(inputVal - 1);
          }
          break;
      }
    }
  }
}
