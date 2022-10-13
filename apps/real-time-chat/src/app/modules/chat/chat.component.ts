import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  constructor(public readonly chatService: ChatService) {}
  public messageForm = new FormGroup({
    userName: new FormControl(''),
    text: new FormControl(''),
  });
  ngOnInit() {
    this.chatService.initChat();
  }

  public onSubmit() {
    const { text, userName } = this.messageForm.value;
    console.log(this.messageForm.value);

    if (!text && !userName) return;
    this.chatService.sendMessage({
      ...this.messageForm.value,
      userId: 'ds',
    } as any);
  }
}
