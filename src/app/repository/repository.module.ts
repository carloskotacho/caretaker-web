import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { MainComponent } from './main/main.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    VirtualScrollerModule
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
