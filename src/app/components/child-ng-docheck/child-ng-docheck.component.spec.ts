import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgDocheckComponent } from './child-ng-docheck.component';

describe('ChildNgDocheckComponent', () => {
  let component: ChildNgDocheckComponent;
  let fixture: ComponentFixture<ChildNgDocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgDocheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
