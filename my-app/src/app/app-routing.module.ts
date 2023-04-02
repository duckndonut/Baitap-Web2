import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDelComponent } from './fashion-del/fashion-del.component';
import { CoinDeskComponent } from './coin-desk/coin-desk.component';
const routes: Routes = [
  {path : 'bai32', component: CoinDeskComponent},
  {path : 'bai57', component: FashionComponent },
  {path : 'bai58', component: FashionDetailComponent },
  {path : 'bai59', component: FashionNewComponent },
  {path : 'bai60', component: FashionUpdateComponent },
  {path : 'bai61', component: FashionDelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
