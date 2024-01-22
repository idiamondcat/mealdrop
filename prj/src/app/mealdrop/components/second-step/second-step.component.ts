import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
})
export class SecondStepComponent {
  @Output() decreaseStep = new EventEmitter<number>();
  deliveryForm = new FormGroup({
    streetName: new FormControl(''),
    houseNum: new FormControl(''),
    zipcode: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(
    private builder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  get getStreetname(): AbstractControl<string | null, string | null> | null {
    return this.deliveryForm.get('streetName');
  }

  get getHouse(): AbstractControl<string | null, string | null> | null {
    return this.deliveryForm.get('houseNum');
  }

  get getZipcode(): AbstractControl<string | null, string | null> | null {
    return this.deliveryForm.get('zipcode');
  }

  get getCity(): AbstractControl<string | null, string | null> | null {
    return this.deliveryForm.get('city');
  }

  private createForm() {
    this.deliveryForm = this.builder.group({
      streetName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      houseNum: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      zipcode: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    });
  }

  goToPrev() {
    this.decreaseStep.emit(1);
  }
  public placeOrder() {
    this.router.navigate(['placed']);
  }
}
