import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiasListaComponent } from './alergias-lista.component';

describe('AlergiasListaComponent', () => {
  let component: AlergiasListaComponent;
  let fixture: ComponentFixture<AlergiasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlergiasListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlergiasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
