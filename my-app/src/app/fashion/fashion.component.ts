import { Component } from '@angular/core';
import { FashionAPIService } from '../services/fashion-api.service';
@Component({
    selector: '[app-fashion]',
    templateUrl: './fashion.component.html',
    styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
    fashions: any;
    errMessage: string = ''
    constructor(public _service: FashionAPIService) {
        this._service.getFashions().subscribe({
            next: (data) => { this.fashions = data },
            error: (err) => { this.errMessage = err }
        })
    }
}
