import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'real-time-chat-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private http: HttpClient) {}
}
