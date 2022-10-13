import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './chat.service';

const config: SocketIoConfig = {
  url: 'http://localhost:3333/chat',
  options: {},
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SocketIoModule.forRoot(config)],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
