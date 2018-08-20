import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccouthistoryComponent } from './accouthistory.component';

describe('AccouthistoryComponent', () => {
  let component: AccouthistoryComponent;
  let fixture: ComponentFixture<AccouthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccouthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccouthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
