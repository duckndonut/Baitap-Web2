import { Component } from '@angular/core';
import { FashionAPIService } from '../services/fashion-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent {
  fashion: any;
  routeId: string = ''
  errMessage: string = ''
  constructor(private _service: FashionAPIService, private _router: Router) {
    this._router.url.includes('/detail/') ? this.routeId = this._router.url.split('/')[2] : this.routeId = ''
    this.searchFashion(this.routeId)
  }
  
  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err }
    })
  }

}
