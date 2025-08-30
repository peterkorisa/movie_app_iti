import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistCard } from './watchlist-card';

describe('WatchlistCard', () => {
  let component: WatchlistCard;
  let fixture: ComponentFixture<WatchlistCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchlistCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
