import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, 
         Http }          from '@angular/http';

import { TranslateModule,
         TranslateLoader,
         TranslateStaticLoader} from 'ng2-translate/ng2-translate'

import { AppComponent }  from './app.component';

import { ChooseJarComponent }       from './choose-jar.component';
import { ChooseNutComponent }       from './choose-nut.component';
import { ChooseSeparatorComponent } from './choose-separator.component';
import { ChooseScoopComponent }     from './choose-scoop.component';

import { ProductsListComponent }    from './products-list.component';
import { SummaryComponent }         from './summary.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpModule,
                  TranslateModule.forRoot({
                    provide: TranslateLoader,
                    useFactory: ( http: Http ) => new TranslateStaticLoader( http, '/assets/i18n', '.json' ),
                    deps: [ Http ]
                 }) ],
  declarations: [ AppComponent, 
                  ChooseJarComponent,
                  ChooseNutComponent,
                  ChooseSeparatorComponent,
                  ChooseScoopComponent,
                  
                  ProductsListComponent,
                  SummaryComponent ],
  providers:    [],
  exports:      [ AppComponent, TranslateModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
