import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifeCycleHooksComponent } from './child-life-cycle-hooks.component';

describe('ChildLifeCycleHooksComponent', () => {
  let component: ChildLifeCycleHooksComponent;
  let fixture: ComponentFixture<ChildLifeCycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLifeCycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLifeCycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
