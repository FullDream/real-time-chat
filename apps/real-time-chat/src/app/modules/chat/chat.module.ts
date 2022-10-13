import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { MessageComponent } from '../message/message.component';
@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiButtonModule,
    MessageComponent,
  ],
  providers: [ChatService],
  exports: [ChatComponent],
})
export class ChatModule {}
