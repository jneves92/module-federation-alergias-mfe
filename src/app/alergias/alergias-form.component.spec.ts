import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiasFormComponent } from './alergias-form.component';

describe('AlergiasFormComponent', () => {
  let component: AlergiasFormComponent;
  let fixture: ComponentFixture<AlergiasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AlergiasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlergiasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
