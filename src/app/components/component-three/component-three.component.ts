import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ComponentThreeComponent {

}
