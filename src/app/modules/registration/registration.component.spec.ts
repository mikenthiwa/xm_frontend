import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";

import { RegistrationFormComponent} from "./components/registration-form/registration-form.component";
import { WelcomeHomeComponent} from "../welcome/components/welcome-home/welcome-home.component";
import {RegistrationService} from "../../core/registration.service";
import {FormField} from "../../core/models";
import {FormFields} from "../../Mocks/registration/fields";

describe('RegistrationComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let registrationService: jasmine.SpyObj<RegistrationService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('RegistrationService', ['registerUser', 'getFormFields']);

    await TestBed.configureTestingModule({
      declarations: [
        RegistrationFormComponent,
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'welcome', component: WelcomeHomeComponent }
        ])],
      providers: [
        { provide: RegistrationService, useValue: spy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    registrationService = TestBed.inject(RegistrationService) as jasmine.SpyObj<RegistrationService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.registrationForm.invalid).toBeFalsy();
  });

  it('should set the form fields when the component is initialized', () => {
    registrationService.getFormFields.and.returnValue(of(FormFields));
    component.ngOnInit();
    expect(component.formFields).toEqual(FormFields);
  });

  it('should be valid when filled with correct data', () => {
    registrationService.getFormFields.and.returnValue(of(FormFields));
    component.ngOnInit();
    component.registrationForm.setValue({
      email: 'joe@gmail.com',
      first_name: 'joe',
      last_name: 'doe',
      middle_name: 'Mcvoy',
      password: 'Nairobi1234',
      phone_number: '12345664',
    });
    expect(component.registrationForm.valid).toBeTruthy();
  });

  it('should call the register method of the RegistrationService when the form is submitted', () => {

    registrationService.registerUser.and.returnValue(of({success: true, message: 'User registered successfully'}));

    component.onSubmit();

    expect(registrationService.registerUser).toHaveBeenCalled();
  });
});
