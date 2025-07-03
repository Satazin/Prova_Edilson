// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "@angular/fire/app";

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
export const firebaseConfig = {
  apiKey: "AIzaSyDqxdAyttmtZpHk59CApuphOUSH4a93T9g",
  authDomain: "edson-b0eb1.firebaseapp.com",
  databaseURL: "https://edson-b0eb1-default-rtdb.firebaseio.com",
  projectId: "edson-b0eb1",
  storageBucket: "edson-b0eb1.firebasestorage.app",
  messagingSenderId: "222433963194",
  appId: "1:222433963194:web:15ee32f8b510b6e789a683"
};
const app = initializeApp(firebaseConfig);