import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWatchlist } from './no-watchlist';

describe('NoWatchlist', () => {
  let component: NoWatchlist;
  let fixture: ComponentFixture<NoWatchlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoWatchlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoWatchlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
