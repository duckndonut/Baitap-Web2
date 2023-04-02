import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFashionComponent } from './client-fashion.component';

describe('ClientFashionComponent', () => {
  let component: ClientFashionComponent;
  let fixture: ComponentFixture<ClientFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
