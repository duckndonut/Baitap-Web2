import { Component } from '@angular/core';
import { FashionAPIService } from '../services/fashion-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-fashion',
  templateUrl: './admin-fashion.component.html',
  styleUrls: ['./admin-fashion.component.css']
})
export class AdminFashionComponent {
  fashions: any;
  errMessage: string = ''

  constructor(public _service: FashionAPIService, private _router: Router) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  routeToUpdateFashion(fashionId: string) {
    this._router.navigate(['edit', fashionId])
  }

  routeToCreateFashion() {
    this._router.navigate(['new'])
  }

  routeToDetailFashion(fashionId: string) {
    this._router.navigate(['detail', fashionId])
  }

  deleteFashion(fashionId: string) {
    // confirm delete
    let confirm = window.confirm('Bạn có chắc muốn xóa sản phẩm?')
    if (confirm === true) {
      this._service.deleteFashion(fashionId).subscribe({
        next: (data) => { this.fashions = data },
        error: (err) => { this.errMessage = err }
      })
    }
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
