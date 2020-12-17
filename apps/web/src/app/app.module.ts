import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { EditTaskModule } from './edit-task/edit-task.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), 
    AppRoutingModule, 
    EditTaskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
