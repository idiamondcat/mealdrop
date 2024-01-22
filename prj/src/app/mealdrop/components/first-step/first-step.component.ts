import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent {
  @Output() increaseStep = new EventEmitter<number>();
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  get getFirstName(): AbstractControl<string | null, string | null> | null {
    return this.contactForm.get('firstName');
  }

  get getLastName(): AbstractControl<string | null, string | null> | null {
    return this.contactForm.get('lastName');
  }

  get getEmail(): AbstractControl<string | null, string | null> | null {
    return this.contactForm.get('email');
  }

  get getPhone(): AbstractControl<string | null, string | null> | null {
    return this.contactForm.get('phone');
  }

  private createForm() {
    this.contactForm = this.builder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('[0-9]*')]],
    });
  }

  goToNext() {
    this.increaseStep.emit(2);
  }
}
