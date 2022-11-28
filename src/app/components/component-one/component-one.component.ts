import { CommonModule } from '@angular/common';
import {  ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOneComponent {

}
