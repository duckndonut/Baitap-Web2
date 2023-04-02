import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStyleComponent } from './client-style.component';

describe('ClientStyleComponent', () => {
  let component: ClientStyleComponent;
  let fixture: ComponentFixture<ClientStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
