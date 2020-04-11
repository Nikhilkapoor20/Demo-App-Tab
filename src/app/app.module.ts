import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MockService } from './app.mock-service';
import { CustomAddComponent } from './custom-add/custom-add.component';
import { QuickAddComponent } from './quick-add/quick-add.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  TableComponent,
  QuickAddComponent,
  CustomAddComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    components,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
