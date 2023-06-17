import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import {MatIconModule} from "@angular/material/icon";
import { PhoneFieldComponent } from './components/phone-field/phone-field.component';

@NgModule({
  declarations: [RegistrationComponent, RegistrationFormComponent, PasswordFieldComponent, PhoneFieldComponent],
  imports: [CommonModule, RegistrationRoutingModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class RegistrationModule {}
