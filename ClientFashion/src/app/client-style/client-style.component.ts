import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { Fashion } from '../models/Fashion';

@Component({
  selector: 'app-client-style',
  templateUrl: './client-style.component.html',
  styleUrls: ['./client-style.component.css']
})
export class ClientStyleComponent {
  style: string = ''
  styles: string[] = []
  select: string = ''
  errMessage: string = ''
  styleSearchTerm: string = ''
  selectFashions: Fashion[] = []

  constructor(private _service: ClientService, private _router: Router) {
    this.getListStyles()
    this._router.url.includes('/style/') ? this.select = this._router.url.split('/')[2] : this.select = ''
    this.getFashionsByStyle(this.select)
  }

  getListStyles() {
    this._service.getListStyles().subscribe({
      next: (data) => { this.styles = data },
      error: (err) => { this.errMessage = err }
    })
  }

  getFashionsByStyle(style: string) {
    this._service.getFashionsByStyle(style).subscribe({
      next: (data) => { this.selectFashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  // Lỗi không tự cập nhật lại dữ liệu khi chuyển giữa các style trong lần đầu tiên chuyển route
  routeToStyle(style: string) {    
    this._router.navigate(['/style', style])
    this._router.url.includes('/style/') ? this.select = this._router.url.split('/')[2] : this.select = ''
    this.getFashionsByStyle(this.select)
  }

  routeToDetail(id: string) {
    this._router.navigate(['/detail', id])
  }

  routeToHome() {
    this._router.navigate(['/'])
  }
}
