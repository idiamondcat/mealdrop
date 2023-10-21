import { Component, Input, OnInit } from '@angular/core';
import IRest from 'src/app/models/restaurant';
import ICategory from 'src/app/models/category';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {
  @Input() sliderElems: any[];
  id: string = 'slider_' + this.randomKeyGenerator();
  constructor() {}

  ngOnInit(): void {
    const sliderElems = this.sliderElems;
  }
  public moveRight(): void {
    const slider: HTMLElement | null = document.getElementById(this.id);
    const sliderCont: HTMLElement | null | undefined = slider?.querySelector('.slider__container');
    if (sliderCont) {
      const sliderContWidth: number = sliderCont.getBoundingClientRect().width;
      sliderCont.scrollLeft += sliderContWidth;
    }
    // sliderCont?.classList.add('to-right');
    // rightBtn.removeEventListener('click', moveRight);
    // leftBtn.removeEventListener('click', moveLeft);
  }

  public moveLeft(): void {
    const slider: HTMLElement | null = document.getElementById(this.id);
    const sliderCont: HTMLElement | null | undefined = slider?.querySelector('.slider__container');
    if (sliderCont) {
      const sliderContWidth: number = sliderCont.getBoundingClientRect().width;
      sliderCont.scrollLeft -= sliderContWidth;
    }
  }
  private randomKeyGenerator(): string {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    const randomLength: number = Math.floor(Math.random() * 4) + 2;
    let i = 0;
    let randomKey = "";
    while (i < randomLength) {
      const randomNum: number = Math.floor(Math.random() * characters.length);
      randomKey += characters.substring(randomNum, randomNum + 1);
      i += 1;
    }
    return randomKey;
  }
}