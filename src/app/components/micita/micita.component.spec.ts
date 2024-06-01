import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIcitaComponent } from './micita.component';

describe('MIcitaComponent', () => {
  let component: MIcitaComponent;
  let fixture: ComponentFixture<MIcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MIcitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MIcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
