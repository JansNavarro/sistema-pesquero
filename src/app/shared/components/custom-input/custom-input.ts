import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
type typeInput = 'text' | 'email' | 'number' | 'password'
@Component({
  selector: 'app-custom-input',
  imports: [],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput implements ControlValueAccessor{
  label = input<string>('');
  placeholder = input<string>('');
  type = input<typeInput>('text');
  messageError = input<string>('');
  showError = input(false);


  value = signal<string>('');
  disabled = signal(false);

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};


  onInput(event : Event):void{
    const elemento = event.target as HTMLInputElement
    this.value.set(elemento.value);
    this.onChange(elemento.value);
  }

  onBlur(): void{
    this.onTouched();
  }


  writeValue(v: string): void {
    this.value.set(v ?? '')
  }
  registerOnChange(fn: (v:string) => void): void {
    this.onChange = fn
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
