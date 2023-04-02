import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDelComponent } from './fashion-del.component';

describe('FashionDelComponent', () => {
  let component: FashionDelComponent;
  let fixture: ComponentFixture<FashionDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
