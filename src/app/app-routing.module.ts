import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReceivingComponentComponent } from './receiving-component/receiving-component.component';

const routes: Routes = [
  {path: '' , component: FormComponent},
  {path: 'received' , component: ReceivingComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
