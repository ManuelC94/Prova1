import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsProdottiComponent } from './alerts-prodotti.component';

describe('AlertsProdottiComponent', () => {
  let component: AlertsProdottiComponent;
  let fixture: ComponentFixture<AlertsProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsProdottiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
