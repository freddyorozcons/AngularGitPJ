import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameHolderComponent } from './main-game-holder.component';

describe('MainGameHolderComponent', () => {
  let component: MainGameHolderComponent;
  let fixture: ComponentFixture<MainGameHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGameHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
