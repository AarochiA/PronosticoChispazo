import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastStatisticsComponent } from './forecast-statistics.component';

describe('ForecastStatisticsComponent', () => {
  let component: ForecastStatisticsComponent;
  let fixture: ComponentFixture<ForecastStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
