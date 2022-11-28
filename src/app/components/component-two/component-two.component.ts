import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ComponentTwoComponent {

}
