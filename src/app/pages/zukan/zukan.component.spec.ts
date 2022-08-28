import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZukanComponent } from './zukan.component';

describe('ZukanComponent', () => {
  let component: ZukanComponent;
  let fixture: ComponentFixture<ZukanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZukanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
