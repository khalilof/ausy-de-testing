import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BmiUiComponent } from './container-presenter/bmi-ui/bmi-ui.component';
import { BmiContainerComponent } from './container-presenter/bmi-container/bmi-container.component';
import { SimpleComponent } from './simple-component/simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiUiComponent,
    BmiContainerComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
