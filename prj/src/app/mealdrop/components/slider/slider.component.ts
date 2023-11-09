import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() sliderElems: any[];
  id: string = 'slider_' + this.randomKeyGenerator();

  public moveRight(): void {
    const slider: HTMLElement | null = document.getElementById(this.id);
    const sliderCont: HTMLElement | null | undefined =
      slider?.querySelector('.slider__container');
    if (sliderCont) {
      const sliderContWidth: number = sliderCont.getBoundingClientRect().width;
      sliderCont.scrollLeft += sliderContWidth;
    }
  }

  public moveLeft(): void {
    const slider: HTMLElement | null = document.getElementById(this.id);
    const sliderCont: HTMLElement | null | undefined =
      slider?.querySelector('.slider__container');
    if (sliderCont) {
      const sliderContWidth: number = sliderCont.getBoundingClientRect().width;
      sliderCont.scrollLeft -= sliderContWidth;
    }
  }
  private randomKeyGenerator(): string {
    const characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    const randomLength: number = Math.floor(Math.random() * 4) + 2;
    let i = 0;
    let randomKey = '';
    while (i < randomLength) {
      const randomNum: number = Math.floor(Math.random() * characters.length);
      randomKey += characters.substring(randomNum, randomNum + 1);
      i += 1;
    }
    return randomKey;
  }
}
