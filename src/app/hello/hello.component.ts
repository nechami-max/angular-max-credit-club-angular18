import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  @Input() name: string = '';
}
