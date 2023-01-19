import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import {PreventOrientation} from 'prevent-orientation';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // new PreventOrientation({
  //   text: 'Kindly rotate your device to see the website',
  //   color: 'rgb(255,255,255)',
  //   background:
  //     'linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160))',
  //   fontSize: '1.2rem',
  // }).preventOrientationToAngle(90);