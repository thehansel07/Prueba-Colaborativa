import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store'; 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountNumbers } from './state/state.state';
import { OtherComponentComponent } from './other-component/other-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxsModule.forRoot([CountNumbers])],
  declarations: [ AppComponent, HelloComponent,  OtherComponentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
