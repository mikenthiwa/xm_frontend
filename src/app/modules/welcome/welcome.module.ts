import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { WelcomeHomeComponent } from './components/welcome-home/welcome-home.component';

@NgModule({
  declarations: [WelcomeComponent, WelcomeHomeComponent],
  imports: [CommonModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
