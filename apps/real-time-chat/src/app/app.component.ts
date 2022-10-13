import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from './chat.service';

@Component({
  selector: 'real-time-chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<any>('/api/hello');
  chat: any;
  constructor(
    private http: HttpClient,
    public readonly chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatService.initChat();
    this.chatService.getMessage().subscribe((res) => {
      console.log('chat', res);

      this.chat = res;
    });
  }
}
