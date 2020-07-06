import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TooltipModule } from 'primeng/tooltip';

import { MainComponent } from './main/main.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryRoutingModule } from './repository-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataViewModule,
    TooltipModule,

    RepositoryRoutingModule
  ],
  declarations: [
    MainComponent,
    RepositoryComponent
  ],
  exports: [
    MainComponent,
    RepositoryComponent
  ]
})
export class RepositoryModule { }
