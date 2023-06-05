import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DataService } from '../data-viewer/data.service';
import { DataViewComponent } from '../data-viewer/data-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, DynamicFormComponent, DataViewComponent],
  providers: [DataService],
})
export class HomePageModule {}
