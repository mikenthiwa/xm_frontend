import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [RegistrationComponent, RegistrationFormComponent],
  imports: [CommonModule, RegistrationRoutingModule],
})
export class RegistrationModule {}
