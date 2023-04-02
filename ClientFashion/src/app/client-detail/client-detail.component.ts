import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent {
fashionId: string= ''
fashion: any = {}
errMessage: string = ''

  constructor(private _service: ClientService, private _router: Router) {
    this._router.url.includes('/detail/') ? this.fashionId =  this._router.url.split('/')[2] : this.fashionId = ''
    this.getFashion(this.fashionId)
  }

  getFashion(id: string) {
    this._service.getFashionById(id).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err }
    })
  }

  routeToHome() {
    this._router.navigate([''])
  }
}

