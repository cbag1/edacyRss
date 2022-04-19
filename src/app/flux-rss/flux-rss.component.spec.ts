import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxRssComponent } from './flux-rss.component';

describe('FluxRssComponent', () => {
  let component: FluxRssComponent;
  let fixture: ComponentFixture<FluxRssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxRssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
