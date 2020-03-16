import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBottomLogComponent } from './nav-bottom-log.component';

describe('NavBottomLogComponent', () => {
  let component: NavBottomLogComponent;
  let fixture: ComponentFixture<NavBottomLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBottomLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBottomLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
