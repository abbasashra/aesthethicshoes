import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportshoesComponent } from './sportshoes.component';

describe('SportshoesComponent', () => {
  let component: SportshoesComponent;
  let fixture: ComponentFixture<SportshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportshoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
