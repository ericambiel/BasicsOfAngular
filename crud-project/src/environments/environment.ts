// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Faz o link entre seu projeto e firebase, essas propriedades são adquiridas do site firebase.
  firebase: {
    apiKey: "AIzaSyDh9zXdsUNcr0EyVFpvHKJZtNe5TgtF7kw",
    authDomain: "crud-ericambiel.firebaseapp.com",
    databaseURL: "https://crud-ericambiel.firebaseio.com",
    projectId: "crud-ericambiel",
    storageBucket: "",
    messagingSenderId: "692275453898",
    appId: "1:692275453898:web:5218945a17381b03"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
