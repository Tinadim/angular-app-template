import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const { appId, useSsr } = environment as any;

const browserModule = useSsr ?
    BrowserModule.withServerTransition({ appId }) :
    BrowserModule;

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        browserModule,
    ],
    providers: [],
})
export class AppModule {}