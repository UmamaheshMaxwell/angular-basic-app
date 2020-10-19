import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MovieComponent } from './components/movie/movie.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { EmojiDirective } from './directives/emoji.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { PipeComponent } from './components/pipe/pipe.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AnotherChildComponent } from './components/another-child/another-child.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ParentThreeComponent } from './components/parent-three/parent-three.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';
import { ParentLifeCycleHooksComponent } from './components/parent-life-cycle-hooks/parent-life-cycle-hooks.component';
import { ChildLifeCycleHooksComponent } from './components/child-life-cycle-hooks/child-life-cycle-hooks.component';
import { ParentNgDocheckComponent } from './components/parent-ng-docheck/parent-ng-docheck.component';
import { ChildNgDocheckComponent } from './components/child-ng-docheck/child-ng-docheck.component';
import { ParentNgDestroyComponent } from './components/parent-ng-destroy/parent-ng-destroy.component';
import { ChildNgDestroyComponent } from './components/child-ng-destroy/child-ng-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    MovieComponent,
    EmployeeComponent,
    ChangeColorDirective,
    EmojiDirective,
    FilterPipe,
    PipeComponent,
    ParentComponent,
    ChildComponent,
    AnotherChildComponent,
    ParentOneComponent,
    ChildOneComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    ParentThreeComponent,
    ChildThreeComponent,
    ParentLifeCycleHooksComponent,
    ChildLifeCycleHooksComponent,
    ParentNgDocheckComponent,
    ChildNgDocheckComponent,
    ParentNgDestroyComponent,
    ChildNgDestroyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
