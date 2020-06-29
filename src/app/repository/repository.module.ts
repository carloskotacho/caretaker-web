import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { MainComponent } from './main/main.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  imports: [
    CommonModule,

    InputTextModule,
    ButtonModule
  ],
  declarations: [
    MainComponent,
    RepositoryComponent
  ],
  exports: [
    MainComponent,
    RepositoryComponent
  ],
  providers: []
})
export class RepositoryModule { }