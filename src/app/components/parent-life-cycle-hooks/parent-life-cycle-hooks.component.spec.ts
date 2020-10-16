import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifeCycleHooksComponent } from './parent-life-cycle-hooks.component';

describe('ParentLifeCycleHooksComponent', () => {
  let component: ParentLifeCycleHooksComponent;
  let fixture: ComponentFixture<ParentLifeCycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLifeCycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLifeCycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
