import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { TuiRootModule } from '@taiga-ui/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from './modules/chat/chat.module';

const config: SocketIoConfig = {
  url: 'http://localhost:3333/chat',
  options: {},
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TuiRootModule,
    ChatModule,
    SocketIoModule.forRoot(config),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
