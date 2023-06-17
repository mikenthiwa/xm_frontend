import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-phone-field',
  templateUrl: './phone-field.component.html',
  styleUrls: ['./phone-field.component.scss']
})
export class PhoneFieldComponent {
  @Input() control: FormControl;
}
