import { Component } from '@angular/core';
import { StoreFacadeService } from '../../../redux/store-facade.service';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/redux/redux.models';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  order: Observable<IOrder[]>;
  restaurant: Observable<string>;
  total: Observable<number>;
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });
  constructor(private builder: FormBuilder, private facade: StoreFacadeService) {
    this.order = this.facade.order$;
    this.restaurant = this.facade.restaurant$;
    this.total = this.facade.total$;
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

  createForm() {
    this.contactForm = this.builder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('[0-9]*')]],
    });
  }
}
