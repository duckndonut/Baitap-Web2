import { Component } from '@angular/core';
import { Fashion } from '../models/Fashion';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-client-fashion]',
  templateUrl: './client-fashion.component.html',
  styleUrls: ['./client-fashion.component.css']
})
export class ClientFashionComponent {
  style: string = ''
  styles: string[] = []
  fashion: any
  fashions: any
  selectedStyle: string = ''
  errMessage: string = ''
  styleSearchTerm: string = ''

  constructor(private _service: ClientService, private _router: Router) {
    this.getFashions()
    this.getListStyles()
  }

  getListStyles() {
    this._service.getListStyles().subscribe({
      next: (data) => { this.styles = data },
      error: (err) => { this.errMessage = err }
    })
  }

  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  getFashionsById(id: string) {
    this._service.getFashionById(id).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  getFashionsByStyle(style: string) {
    this._service.getFashionsByStyle(style).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })    
  }

  // lỗi lặp vô hạn khi get fashions by style trong lúc hiển thị fashions
  filterStyle = (style: string): Fashion[] => {
    return this.fashions.filter((fashion: { style: string }) => fashion.style === style);
  }

  routeToStyle(style: string) {
    this._router.navigate(['/style', style])
  }

  routeToDetail(id: string) {
    this._router.navigate(['/detail', id])
  }
}


