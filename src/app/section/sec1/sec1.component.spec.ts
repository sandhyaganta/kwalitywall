import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1Component } from './sec1.component';

describe('Sec1Component', () => {
  let component: Sec1Component;
  let fixture: ComponentFixture<Sec1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sec1Component]
    });
    fixture = TestBed.createComponent(Sec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
