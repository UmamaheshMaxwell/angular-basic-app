import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgDestroyComponent } from './parent-ng-destroy.component';

describe('ParentNgDestroyComponent', () => {
  let component: ParentNgDestroyComponent;
  let fixture: ComponentFixture<ParentNgDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNgDestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
