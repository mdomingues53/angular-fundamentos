import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CursoComponent } from './data-binding/curso/curso.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    CursoComponent,
    OutputPropertiesComponent,
    PropertyBindingComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
