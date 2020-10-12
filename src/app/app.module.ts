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
    ChildOneComponent
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
