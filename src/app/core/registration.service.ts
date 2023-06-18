import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormFields } from "../Mocks/registration/fields";
import {FormField} from "./models";
import {Form} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  getFormFields(): Observable<FormField[]> {
    return of(FormFields);
  }

  registerUser(form: Form): Observable<any> {
    return of({success: true, message: 'User registered successfully'});
  }
}
