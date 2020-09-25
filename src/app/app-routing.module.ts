import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BmiContainerComponent } from './container-presenter/bmi-container/bmi-container.component';
import { SimpleComponent } from './simple-component/simple/simple.component';

const routes: Routes = [
  {
    path: '', component: SimpleComponent,
  },
  {
    path: 'bmi-calculator', component: BmiContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
