import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Form';
  name = new FormControl('Tinnakorn Choompee');
  test = '';

  setDefaultValue() {
    this.name.patchValue('Angular 8');
    console.log(this.name.value);
  }
}
