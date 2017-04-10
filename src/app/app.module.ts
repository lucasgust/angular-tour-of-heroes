import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroFormComponent } from './hero/hero-form.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroFormComponent
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
