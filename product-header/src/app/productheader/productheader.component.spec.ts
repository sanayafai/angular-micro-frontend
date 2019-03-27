import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductheaderComponent } from './productheader.component';

describe('ProductheaderComponent', () => {
  let component: ProductheaderComponent;
  let fixture: ComponentFixture<ProductheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
