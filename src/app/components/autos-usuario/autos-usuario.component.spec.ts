import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosUsuarioComponent } from './autos-usuario.component';

describe('AutosUsuarioComponent', () => {
  let component: AutosUsuarioComponent;
  let fixture: ComponentFixture<AutosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutosUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
