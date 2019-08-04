import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';

@NgModule({
  declarations: [ShellComponent, NavbarComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ShellComponent, NavbarComponent],
})
export class LayoutModule { }
