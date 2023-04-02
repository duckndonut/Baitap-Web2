import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Fashion } from '../models/Fashion';
import { FashionAPIService } from '../services/fashion-api.service';
@Component({
  selector: '[app-fashion-new]',
  templateUrl: './fashion-new.component.html',
  styleUrls: ['./fashion-new.component.css']
})
export class FashionNewComponent {
  fashion = new Fashion();
  errMessage: string = ''
  constructor(private _service: FashionAPIService) {
  }
  public setFashion(f: Fashion) {
    this.fashion = f
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  postFashion() {
    this._service.postFashion(this.fashion).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
