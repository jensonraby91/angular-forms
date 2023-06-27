import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';

@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
