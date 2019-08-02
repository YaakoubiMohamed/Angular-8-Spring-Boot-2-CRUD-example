import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassService } from './class.service';
import { HttpClientModule } from '@angular/common/http';
import { EditClassComponent } from './edit-class/edit-class.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClassComponent,
    ClassDetailComponent,
    ClassListComponent,
    EditClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
