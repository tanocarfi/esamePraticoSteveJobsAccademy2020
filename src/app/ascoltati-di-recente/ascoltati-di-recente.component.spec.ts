import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscoltatiDiRecenteComponent } from './ascoltati-di-recente.component';

describe('AscoltatiDiRecenteComponent', () => {
  let component: AscoltatiDiRecenteComponent;
  let fixture: ComponentFixture<AscoltatiDiRecenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscoltatiDiRecenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscoltatiDiRecenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
