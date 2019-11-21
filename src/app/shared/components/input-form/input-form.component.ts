import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFormComponent),
    multi: true
  }]
})
export class InputFormComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() isReadOnly: string;
  value: string;

  public onChange = () => {};
  onTouche: any = () => {};

  writeValue(value: string) { // recoge el valor del formControlName
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouche = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


  constructor() { }

}
