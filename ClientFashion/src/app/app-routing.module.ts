import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFashionComponent } from './client-fashion/client-fashion.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientStyleComponent } from './client-style/client-style.component';

const routes: Routes = [
  {path : '', component : ClientFashionComponent},
  {path : 'detail/:id', component : ClientDetailComponent},
  {path : 'style/:style' , component : ClientStyleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  ClientFashionComponent ]
