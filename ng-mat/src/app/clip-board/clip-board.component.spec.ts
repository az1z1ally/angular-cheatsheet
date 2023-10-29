import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipBoardComponent } from './clip-board.component';

describe('ClipBoardComponent', () => {
  let component: ClipBoardComponent;
  let fixture: ComponentFixture<ClipBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClipBoardComponent]
    });
    fixture = TestBed.createComponent(ClipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
