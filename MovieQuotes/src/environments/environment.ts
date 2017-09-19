// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyD-MUQ67w0qrCmM3R-gQwnJtYUP1Q4uCrc",
    authDomain: "ngf-movie-quotes-sagd.firebaseapp.com",
    databaseURL: "https://ngf-movie-quotes-sagd.firebaseio.com",
    projectId: "ngf-movie-quotes-sagd",
    storageBucket: "ngf-movie-quotes-sagd.appspot.com",
    messagingSenderId: "729906010723"
  }
};
