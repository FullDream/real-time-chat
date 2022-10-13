import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '../../common/pipes/time-ago.pipe';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input() date!: Date;

  @Input() userName!: string;
}
