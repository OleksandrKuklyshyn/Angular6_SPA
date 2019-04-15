import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [MainComponent, ChatComponent],
  imports: [
    CommonModule
  ]
})
export class AngularBotModule { }
