import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppinicioComponent } from './appinicio.component';

describe('AppinicioComponent', () => {
  let component: AppinicioComponent;
  let fixture: ComponentFixture<AppinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
