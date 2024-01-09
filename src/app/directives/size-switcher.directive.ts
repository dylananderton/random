import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sizeSwitcher]',
  exportAs: 'sizeSwitcher',
  standalone: true
})
export class SizeSwitcher {

  @Input()
  @HostBinding('class.large')
  isLarge = false;

  toggle(){
    this.isLarge = !this.isLarge
  }

}
