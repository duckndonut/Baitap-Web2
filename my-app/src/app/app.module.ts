import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FormsModule } from '@angular/forms';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionDelComponent } from './fashion-del/fashion-del.component';
import { CoinDeskComponent } from './coin-desk/coin-desk.component';
@NgModule({
  declarations: [
    AppComponent,
    FashionComponent,
    FashionDetailComponent,
    FashionNewComponent,
    FashionUpdateComponent,
    FashionDelComponent,
    CoinDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
