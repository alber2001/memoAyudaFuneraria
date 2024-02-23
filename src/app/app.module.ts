import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResolucionComponent } from './resolucion/resolucion.component';
import { PagoCajaComponent } from './pago-caja/pago-caja.component';


@NgModule({
  declarations: [
    AppComponent,
    ResolucionComponent,
    PagoCajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
