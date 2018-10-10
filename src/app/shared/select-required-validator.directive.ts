import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
  selector: '[appSelectorValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectedRequiredValidatorDirective,
    multi: true
  }]
})
export class SelectedRequiredValidatorDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('appSelectorValidator') defaultValue: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
  }
}
