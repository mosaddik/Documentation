import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTileComponent } from './page-tile.component';

describe('PageTileComponent', () => {
  let component: PageTileComponent;
  let fixture: ComponentFixture<PageTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
