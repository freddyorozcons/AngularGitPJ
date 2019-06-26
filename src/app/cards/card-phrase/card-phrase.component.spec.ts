import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhraseComponent } from './card-phrase.component';

describe('CardPhraseComponent', () => {
  let component: CardPhraseComponent;
  let fixture: ComponentFixture<CardPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPhraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
