import { Component } from '@angular/core';
import { CoinDeskService } from '../services/coin-desk.service';

@Component({
  selector: 'app-coin-desk',
  templateUrl: './coin-desk.component.html',
  styleUrls: ['./coin-desk.component.css']
})
export class CoinDeskComponent {
  data:any
  errMessage:string=''
  constructor(_service: CoinDeskService){
    _service.getCoinDeskData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
