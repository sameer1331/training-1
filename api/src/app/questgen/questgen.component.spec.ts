import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestgenComponent } from './questgen.component';

describe('QuestgenComponent', () => {
  let component: QuestgenComponent;
  let fixture: ComponentFixture<QuestgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestgenComponent]
    });
    fixture = TestBed.createComponent(QuestgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
