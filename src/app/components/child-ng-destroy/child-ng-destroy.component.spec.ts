import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgDestroyComponent } from './child-ng-destroy.component';

describe('ChildNgDestroyComponent', () => {
  let component: ChildNgDestroyComponent;
  let fixture: ComponentFixture<ChildNgDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgDestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
