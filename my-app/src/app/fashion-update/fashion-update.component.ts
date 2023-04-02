import { Component } from '@angular/core';
import { Fashion } from '../models/Fashion';
import { FashionAPIService } from '../services/fashion-api.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-fashion-update]',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent {
  routeId: string = ''
  fashion = new Fashion() 
  errMessage: string = ''
  fashions: any
  uiSuite = {
    componentTitle: 'Add New Fashion',
    buttonTitle: 'Create',
  }

  constructor(private _service: FashionAPIService, private _router: Router) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
    if (this._router.url === '/new') {
      this.uiSuite.componentTitle = 'Add New Fashion'
      this.uiSuite.buttonTitle = 'Create'
    } else if (this._router.url.includes('/edit/')) {
      this.uiSuite.componentTitle = 'Update Fashion'
      this.uiSuite.buttonTitle = 'Update'
      this.routeId = this._router.url.split('/')[2] // get last part of url - fashionId
      this.getFashionById(this.routeId)
    }
  }

  // get fashion
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // get fashion by id
  getFashionById(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // put fashion
  putFashion(fashionId: string) {
    this.getFashionById(fashionId)
    var tempFashion = new Fashion(
      fashionId,
      this.fashion.style,
      this.fashion.fashion_subject,
      this.fashion.fashion_detail,
      this.fashion.fashion_image,
    
    )

    this._service.putFashion(tempFashion).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
    this.routeToAdminFashion()
  }

  // post fashion
  postFashion() {
    this._service.postFashion(this.fashion).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
    this.routeToAdminFashion()
  }

  executeButton() {
    if (this.uiSuite.buttonTitle === 'Create') {
      this.postFashion()  
    } else if (this.uiSuite.buttonTitle === 'Update') {
      this.putFashion(this.routeId)
    }
  }

  routeToAdminFashion() {
    this._router.navigate([''])
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
  
  onContentChange(event: any) {
    this.fashion.fashion_detail = event.editor.getData();
  }
  }

