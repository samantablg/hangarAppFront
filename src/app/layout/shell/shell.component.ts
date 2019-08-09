import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  public activeLang = 'es';

  constructor( private translate: TranslateService ) {
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);
  }

  public changeLang() {
    console.log();
    if ( this.activeLang === 'es') {
      this.activeLang = 'en';
    } else {
      this.activeLang = 'es';
    }
    this.translate.use(this.activeLang);
  }

  ngOnInit() { }

}
