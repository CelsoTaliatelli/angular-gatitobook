import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosAnimiasComponent } from './grade-fotos-animias.component';

describe('GradeFotosAnimiasComponent', () => {
  let component: GradeFotosAnimiasComponent;
  let fixture: ComponentFixture<GradeFotosAnimiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosAnimiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFotosAnimiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
