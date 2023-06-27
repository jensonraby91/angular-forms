import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  formData: string = '';
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}
 
  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  })
 
  ngOnInit(): void {}
 
  submit() {
    this.isSubmitted = true;
    this.formData = JSON.stringify(this.registrationForm.value);
  }

}
