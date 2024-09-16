import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlippersComponent } from './slippers.component';

describe('SlippersComponent', () => {
  let component: SlippersComponent;
  let fixture: ComponentFixture<SlippersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlippersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
