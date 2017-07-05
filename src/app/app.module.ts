import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import {empComponent} from 'employee/app.emp';

@NgModule({
  declarations: [
    AppComponent,
    empComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [empComponent]
})
export class AppModule { }
