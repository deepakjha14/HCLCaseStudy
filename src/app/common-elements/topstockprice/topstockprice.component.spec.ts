import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstockpriceComponent } from './topstockprice.component';

describe('TopstockpriceComponent', () => {
  let component: TopstockpriceComponent;
  let fixture: ComponentFixture<TopstockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopstockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
