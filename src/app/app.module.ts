import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

import { ChooseJarComponent }       from './choose-jar.component';
import { ChooseNutComponent }       from './choose-nut.component';
import { ChooseSeparatorComponent } from './choose-separator.component';
import { ChooseScoopComponent }     from './choose-scoop.component';

import { ProductsListComponent }    from './products-list.component';
import { SummaryComponent }         from './summary.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, 
                  ChooseJarComponent,
                  ChooseNutComponent,
                  ChooseSeparatorComponent,
                  ChooseScoopComponent,
                  
                  ProductsListComponent,
                  SummaryComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
