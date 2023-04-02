import { Component } from '@angular/core';
import { FashionAPIService } from '../services/fashion-api.service';

@Component({
  selector: 'app-fashion-del',
  templateUrl: './fashion-del.component.html',
  styleUrls: ['./fashion-del.component.css']
})
export class FashionDelComponent {
  fashions: any
  fashionId: string = ''
  errMessage: string = ''
  constructor(private _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // delete fashion
  deleteFashion(fashionId: string) {
    this._service.deleteFashion(fashionId).subscribe({
        next: (data) => {
          this.fashions = data,
            this.errMessage = 'Delete successfully',
           
            this.getFashions()
        }
      })
    
  }

  // get fashions
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }
}

