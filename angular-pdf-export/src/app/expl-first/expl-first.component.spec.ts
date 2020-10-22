import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplFirstComponent } from './expl-first.component';

describe('ExplFirstComponent', () => {
  let component: ExplFirstComponent;
  let fixture: ComponentFixture<ExplFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
