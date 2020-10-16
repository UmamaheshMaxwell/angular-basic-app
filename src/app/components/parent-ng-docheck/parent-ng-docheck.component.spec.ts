import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgDocheckComponent } from './parent-ng-docheck.component';

describe('ParentNgDocheckComponent', () => {
  let component: ParentNgDocheckComponent;
  let fixture: ComponentFixture<ParentNgDocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNgDocheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
