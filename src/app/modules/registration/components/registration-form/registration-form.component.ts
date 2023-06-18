import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';

import { RegistrationService } from '../../../../core/registration.service';
import { FormField } from '../../../../core/models';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit{
  registrationForm: FormGroup;
  formFields: Array<FormField> = [];

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {
    this.registrationForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.registrationService.getFormFields().subscribe(fields => {
      console.log('fields', fields);
      this.formFields = fields;
      this.registrationForm = this.createFormGroup();
    });
  }

  createFormGroup(): FormGroup {
    const group: any = this.formFields.reduce((group, field) => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.validations) {
        field.validations.forEach(validation => {
          switch (validation.name) {
            case 'regex':
              validators.push(Validators.pattern(validation.value));
              break;
            case 'maxlength':
              validators.push(Validators.maxLength(validation.value));
              break;
            case 'minlength':
              validators.push(Validators.minLength(validation.value));
              break;
          }
        });
      }
      // @ts-ignore
      group[field.name] = [null, validators];
      return group;
    }, {});
    return this.formBuilder.group(group);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.invalid && control.touched;
  }

  getControlError(controlName: string): string {
    const control = this.registrationForm.controls[controlName];
    return control.errors ? Object.values(control.errors)[0] : '';
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value)
      this.registrationService.registerUser(this.registrationForm.value).subscribe(response => {
        if(response.success) {
          this.router.navigate(['/welcome'])
        }
      });
    }
  }

  protected readonly FormControl = FormControl;
  protected readonly FormGroup = FormGroup;
  protected readonly FormControlName = FormControlName;
}
