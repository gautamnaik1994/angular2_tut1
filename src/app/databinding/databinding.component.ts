import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  stringInterpolation = 'This is string Interpolation';
  numberInterpolation = 2;
  onTest() {
    return true;
  }
  onClicked(value:string) {
    alert(value);
  }
}
