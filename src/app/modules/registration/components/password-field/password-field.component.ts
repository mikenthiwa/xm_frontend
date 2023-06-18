import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent {
  @Input() control: FormControl;
  hide = true;

  toggleVisibility() {
    this.hide = !this.hide;
  }
}
