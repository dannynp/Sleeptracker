// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCjm7MZJ-gK1zwNQi2CfqkpDcEyl2z8uCY',
    authDomain: 'a5-sleeptracker-dan-and-mac.firebaseapp.com',
    databaseURL: 'https://a5-sleeptracker-dan-and-mac.firebaseio.com',
    projectId: 'a5-sleeptracker-dan-and-mac',
    storageBucket: 'gs://a5-sleeptracker-dan-and-mac.appspot.com',
    messagingSenderId: '661759992949'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
