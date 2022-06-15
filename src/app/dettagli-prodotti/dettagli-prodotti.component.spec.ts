import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliProdottiComponent } from './dettagli-prodotti.component';

describe('DettagliProdottiComponent', () => {
  let component: DettagliProdottiComponent;
  let fixture: ComponentFixture<DettagliProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliProdottiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
