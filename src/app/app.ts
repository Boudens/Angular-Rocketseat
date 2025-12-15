import { Component, signal } from '@angular/core';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { BaseUi } from "./_components/base-ui/base-ui";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule ,RouterModule,BaseUi,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = true;
}
