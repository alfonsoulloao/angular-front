// importacion de modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// lo traje manualmente
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// mis componentes
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UtilsModule } from './utils/utils.module';

// mis rutas
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),  
    BrowserAnimationsModule,  
    // mis modulos
    AuthModule,
    PagesModule,
    SharedModule,
    UtilsModule,
    //mis rutas
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
