import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl) {
  let d1Year = new Date();
  let d2Year = new Date(control.value);
  let age = d1Year.getFullYear() - d2Year.getFullYear();
  let m = d1Year.getMonth() - d2Year.getMonth();

  if (m < 0 || (m === 0 && d1Year.getDate() < d2Year.getDate())) {
    age--;
  }

  if (age < 10) {
    return { dateInvalid: true };
  }
  return null;
}
