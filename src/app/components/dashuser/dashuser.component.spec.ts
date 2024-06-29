import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashuserComponent } from './dashuser.component';

describe('DashuserComponent', () => {
  let component: DashuserComponent;
  let fixture: ComponentFixture<DashuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
