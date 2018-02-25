import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

@Directive({
    selector: '[numberCommaValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: NumberCommaValidatorDirective, multi: true}]
  })
  export class NumberCommaValidatorDirective implements Validator {
    validator: ValidatorFn;
    
    constructor() {  
        this.validator = this.numberCommaValidator();  
    }

    validate(control: AbstractControl): {[key: string]: any} {
        return this.validator(control);
    }

    numberCommaValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
          const forbidden = new RegExp('^(\[0-9]+(,\[0-9]+)*)?$').test(control.value);
          if(forbidden) {
              return null;
          } else {
            return {numberCommaValidator : { valid: false }  }
          };
        }
    }
}