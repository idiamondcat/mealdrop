import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() sliderElems: any[];
  @Input() sliderPerPage: number;
  @ViewChild('moveSlider') moveSlider: ElementRef<HTMLDivElement>;
  counter = 0;
  isRun = true;

  public moveRight(): void {
    const width: number =
      this.moveSlider.nativeElement.getBoundingClientRect().width;
    this.moveSlider.nativeElement.scrollLeft += width;
  }

  public moveLeft(): void {
    const width: number =
      this.moveSlider.nativeElement.getBoundingClientRect().width;
    this.moveSlider.nativeElement.scrollLeft -= width;
  }
}
