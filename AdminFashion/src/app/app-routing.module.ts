import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFashionComponent } from './admin-fashion/admin-fashion.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';


const routes: Routes = [
  {path : '' , component : AdminFashionComponent},
  {path: 'edit/:id', component: AdminUpdateComponent},
  {path: 'new', component: AdminUpdateComponent},
  {path: 'detail/:id', component: AdminDetailComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  AdminFashionComponent
]

