interface Validation {
  name: string;
  message: string;
}

export interface RegexValidation extends Validation {
  name: 'regex';
  value: string;
}

export interface MaxLengthValidation extends Validation {
  name: 'maxlength';
  value: number;
}

export interface MinLengthValidation extends Validation {
  name: 'minlength';
  value: number;
}

type FormFieldValidation = RegexValidation | MaxLengthValidation | MinLengthValidation;

export interface FormField {
  type: string;
  name: string;
  label: string;
  required: boolean;
  validations: FormFieldValidation[];
}
